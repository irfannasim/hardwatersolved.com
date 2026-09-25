import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import readingTime from 'reading-time';
import { imageSize } from 'image-size';
import type { Metadata } from 'next';
import type { Components } from 'react-markdown';
import BackToTop from '@/app/_components/BackToTop';
import TableOfContents from '@/app/_components/TableOfContents';
import FAQSection from '@/app/blog/[...slug]/FAQSection';
import { getOptimizedPexelsUrl } from '@/app/_utils/image';
import {
    getBlogContentDir,
    getBlogMarkdownFiles,
    getBlogPostFilePath,
    getBlogPosts,
    resolveImageUrl,
} from '@/app/_utils/blog';
import styles from '@/app/blog/[...slug]/page.module.css';
import GithubSlugger from 'github-slugger';
import React from 'react';

const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || '';
const AUTHOR_NAME = 'Irfan Nasim';
const AUTHOR_URL = `${SITE_DOMAIN}/author/irfan-nasim/`;
const AUTHOR_BIO =
    'Irfan Nasim writes and edits Hard Water Solved. He is not a certified water-treatment professional — he researches each topic against primary sources like the EPA, CDC, NSF, and USGS before writing it up, so the site stays grounded in evidence rather than sales claims.';

type FAQItem = {
    question: string;
    answer: string;
};

function getSlugPath(slug: string[]) {
    return slug.join('/');
}

// Read intrinsic dimensions for a featured image (local file or cached pexels).
function readFeaturedImageDimensions(featuredImg: string | null): {
    img: string | null;
    width: number;
    height: number;
} {
    let width = 1200;
    let height = 630;

    if (featuredImg && !featuredImg.startsWith('http')) {
        const publicPath = path.join(process.cwd(), 'public', featuredImg);
        if (!fs.existsSync(publicPath)) {
            return { img: null, width, height };
        }
        try {
            const buffer = fs.readFileSync(publicPath);
            const dimensions = imageSize(buffer);
            if (dimensions.width && dimensions.height) {
                width = dimensions.width;
                height = dimensions.height;
            }
        } catch (e) {
            console.error('Failed to read local image dimensions:', e);
        }
    } else if (featuredImg && featuredImg.startsWith('http') && featuredImg.includes('pexels.com')) {
        try {
            const urlObj = new URL(featuredImg);
            const pathname = urlObj.pathname;
            const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
            const cachedPath = path.join(process.cwd(), 'public', 'images', 'pexels', filename);
            if (fs.existsSync(cachedPath)) {
                const buffer = fs.readFileSync(cachedPath);
                const dimensions = imageSize(buffer);
                if (dimensions.width && dimensions.height) {
                    width = dimensions.width;
                    height = dimensions.height;
                }
            }
        } catch (e) {
            console.error('Failed to read cached image dimensions:', e);
        }
    }

    return { img: featuredImg, width, height };
}

// Diagrams are hand-drawn SVGs in public/diagrams/, referenced from markdown as
// ![alt](/diagrams/name.svg "caption"). Unlike photos they must never be cropped,
// so they keep their own aspect ratio (read from the SVG's width/height/viewBox).
const DIAGRAM_PATTERN = /!\[([^\]]*)\]\((\/diagrams\/[^\s)]+\.svg)(?:\s+"([^"]*)")?\)/g;

function isDiagramSrc(src: string) {
    return src.startsWith('/diagrams/') && src.endsWith('.svg');
}

function readDiagramDimensions(src: string): { width: number; height: number } | null {
    const publicPath = path.join(process.cwd(), 'public', src);
    if (!fs.existsSync(publicPath)) return null;
    try {
        const { width, height } = imageSize(fs.readFileSync(publicPath));
        return width && height ? { width, height } : null;
    } catch {
        return null;
    }
}

function extractDiagrams(content: string) {
    return [...content.matchAll(DIAGRAM_PATTERN)].map(([, alt, src, caption]) => ({
        alt,
        src,
        caption: caption || alt,
        ...(readDiagramDimensions(src) || { width: 800, height: 450 }),
    }));
}

export function blogPostStaticParams() {
    const blogDir = getBlogContentDir();
    const files = fs.existsSync(blogDir) ? getBlogMarkdownFiles(blogDir) : [];

    const paths = files.map((filePath) => ({
        slug: path
            .relative(blogDir, filePath)
            .replace(/\\/g, '/')
            .replace(/\.md$/, '')
            .split('/'),
    }));

    // Static export requires at least one path from generateStaticParams(), even
    // before the first article is published. This placeholder slug has no matching
    // markdown file, so BlogPostView resolves it to a build-time 404 page.
    if (paths.length === 0) {
        paths.push({ slug: ['_'] });
    }

    return paths;
}

export async function buildBlogPostMetadata(slug: string[]): Promise<Metadata> {
    const slugPath = getSlugPath(slug);
    const filePath = getBlogPostFilePath(slug);

    if (!filePath || !fs.existsSync(filePath)) return {};

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const rawImg = data.featuredImage ? resolveImageUrl(data.featuredImage, '/') : null;
    const { img: featuredImg, width: featuredImgWidth, height: featuredImgHeight } =
        readFeaturedImageDimensions(rawImg);

    const canonicalUrl = data.canonical || `${SITE_DOMAIN}/blog/${slugPath}`;

    return {
        title: data.seoTitle || data.title,
        description: data.seoDescription || data.excerpt,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: data.seoTitle || data.title,
            description: data.seoDescription || data.excerpt,
            url: canonicalUrl,
            type: 'article',
            publishedTime: data.date,
            images: featuredImg
                ? [
                      {
                          url: featuredImg.startsWith('http') ? featuredImg : `${SITE_DOMAIN}${featuredImg}`,
                          width: data.ogImageWidth || featuredImgWidth,
                          height: data.ogImageHeight || featuredImgHeight,
                          alt: data.ogImageAlt || data.title,
                      },
                  ]
                : [],
        },
    };
}

export default async function BlogPostView({ slug }: { slug: string[] }) {
    const slugPath = getSlugPath(slug);

    const filePath = getBlogPostFilePath(slug);

    if (!filePath || !fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const headingLines = content.split('\n').filter((line) => line.match(/^#{2,6}\s/));
    const tocSlugger = new GithubSlugger();

    const toc = headingLines.map((line) => {
        const level = line.match(/^#+/)?.[0].length || 2;

        const rawText = line.replace(/^#{2,6}\s/, '').trim();

        const cleanText = rawText
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove markdown links
            .replace(/https?:\/\/\S+/g, '') // remove raw URLs
            .trim();

        const slugId = tocSlugger.slug(cleanText);

        return { level, text: cleanText, slug: slugId };
    });

    const rawImg = data.featuredImage ? resolveImageUrl(data.featuredImage, '/') : null;
    const { img: featuredImg, width: featuredImgWidth, height: featuredImgHeight } =
        readFeaturedImageDimensions(rawImg);

    const fullFeaturedImg = featuredImg
        ? featuredImg.startsWith('http')
            ? featuredImg
            : `${SITE_DOMAIN}${featuredImg}`
        : null;
    const canonicalUrl = data.canonical || `${SITE_DOMAIN}/blog/${slugPath}`;

    const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || 'Hard Water Solved';

    const diagramImages = extractDiagrams(content).map((d) => ({
        '@type': 'ImageObject',
        '@id': `${SITE_DOMAIN}${d.src}`,
        url: `${SITE_DOMAIN}${d.src}`,
        contentUrl: `${SITE_DOMAIN}${d.src}`,
        encodingFormat: 'image/svg+xml',
        width: d.width.toString(),
        height: d.height.toString(),
        name: d.caption,
        caption: d.caption,
        description: d.alt,
        inLanguage: 'en-US',
    }));
    const articleImageRefs = [
        ...(fullFeaturedImg ? [{ '@id': fullFeaturedImg }] : []),
        ...diagramImages.map((d) => ({ '@id': d['@id'] })),
    ];

    // Comprehensive Schema.org @graph
    const schemaGraph = [
        {
            '@type': 'Organization',
            '@id': `${SITE_DOMAIN}/#organization`,
            name: SITE_TITLE,
            url: SITE_DOMAIN,
            logo: {
                '@type': 'ImageObject',
                '@id': `${SITE_DOMAIN}/#logo`,
                url: `${SITE_DOMAIN}/logo.svg`,
                contentUrl: `${SITE_DOMAIN}/logo.svg`,
                caption: SITE_TITLE,
                inLanguage: 'en-US',
            },
            image: { '@id': `${SITE_DOMAIN}/#logo` },
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_DOMAIN}/#website`,
            url: SITE_DOMAIN,
            name: SITE_TITLE,
            publisher: { '@id': `${SITE_DOMAIN}/#organization` },
            inLanguage: 'en-US',
        },
        fullFeaturedImg && {
            '@type': 'ImageObject',
            '@id': fullFeaturedImg,
            url: fullFeaturedImg,
            width: featuredImgWidth.toString(),
            height: featuredImgHeight.toString(),
            caption: data.title,
            inLanguage: 'en-US',
        },
        {
            '@type': ['WebPage', data.faqs ? 'FAQPage' : 'WebPage'],
            '@id': `${canonicalUrl}/#webpage`,
            url: canonicalUrl,
            name: data.seoTitle || data.title,
            datePublished: data.date,
            dateModified: data.updatedDate || data.date,
            isPartOf: { '@id': `${SITE_DOMAIN}/#website` },
            primaryImageOfPage: fullFeaturedImg ? { '@id': fullFeaturedImg } : undefined,
            inLanguage: 'en-US',
            mainEntity: data.faqs
                ? data.faqs.map((faq: FAQItem, idx: number) => ({
                      '@type': 'Question',
                      url: `${canonicalUrl}/#faq-question-${idx}`,
                      name: faq.question,
                      acceptedAnswer: {
                          '@type': 'Answer',
                          text: faq.answer,
                      },
                  }))
                : undefined,
        },
        {
            '@type': 'BlogPosting',
            headline: data.title,
            datePublished: data.date,
            dateModified: data.updatedDate || data.date,
            articleSection: 'Hard Water & Water Treatment',
            author: {
                '@type': 'Person',
                name: data.author || AUTHOR_NAME,
                url: !data.author || data.author === AUTHOR_NAME ? AUTHOR_URL : SITE_DOMAIN,
            },
            publisher: { '@id': `${SITE_DOMAIN}/#organization` },
            description: data.excerpt,
            name: data.title,
            '@id': `${canonicalUrl}/#richSnippet`,
            isPartOf: { '@id': `${canonicalUrl}/#webpage` },
            image: articleImageRefs.length > 0 ? articleImageRefs : undefined,
            inLanguage: 'en-US',
            mainEntityOfPage: { '@id': `${canonicalUrl}/#webpage` },
        },
        ...diagramImages,
    ].filter(Boolean);

    const headingSlugger = new GithubSlugger();

    type HeadingTag = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string' || typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
            return extractText(node.props.children);
        }

        return '';
    };

    const createHeading = (Tag: HeadingTag) => {
        const Heading = ({ children }: { children?: React.ReactNode }) => {
            const rawText = extractText(children);

            const cleanText = rawText
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/https?:\/\/\S+/g, '')
                .trim();

            const id = headingSlugger.slug(cleanText);

            return React.createElement(Tag, { id }, children);
        };

        Heading.displayName = `Markdown${Tag.toUpperCase()}`;

        return Heading;
    };

    const components: Components = {
        h2: createHeading('h2'),
        h3: createHeading('h3'),
        h4: createHeading('h4'),
        h5: createHeading('h5'),
        h6: createHeading('h6'),

        table: ({ children }) => {
            return (
                <div className={styles.tableWrapper}>
                    <table>{children}</table>
                </div>
            );
        },

        p: ({ node, children }) => {
            const firstChild = node?.children?.[0];

            const isImageOnlyParagraph =
                node?.children?.length === 1 &&
                firstChild?.type === 'element' &&
                firstChild?.tagName === 'img';

            if (isImageOnlyParagraph) {
                const imgSrc = String(firstChild.properties?.src || '');
                const caption = firstChild.properties?.title;

                if (isDiagramSrc(imgSrc)) {
                    // Linked to the full-size SVG so phone readers can open and zoom it.
                    return (
                        <figure className="article-diagram">
                            <a href={imgSrc} target="_blank" rel="noopener" aria-label="Open diagram full size">
                                {children}
                            </a>
                            {caption && <figcaption>{String(caption)}</figcaption>}
                        </figure>
                    );
                }

                return <figure className={styles.markdownImage}>{children}</figure>;
            }

            return <p>{children}</p>;
        },

        a: ({ href = '', children, ...props }) => {
            const linkHref = typeof href === 'string' ? href : '';

            return (
                <a {...props} href={linkHref} className={styles.articleContentLink}>
                    {children}
                </a>
            );
        },

        img: ({ src = '', alt = '', ...props }) => {
            const imageSrc = typeof src === 'string' ? src : '';
            const fullSrc = resolveImageUrl(imageSrc, '/');

            if (isDiagramSrc(fullSrc)) {
                const { width, height } = readDiagramDimensions(fullSrc) || { width: 800, height: 450 };
                return (
                    <img
                        src={fullSrc}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        width={width}
                        height={height}
                    />
                );
            }

            const optimizedSrc = getOptimizedPexelsUrl(fullSrc, 800);

            return (
                <img
                    src={optimizedSrc}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                    {...props}
                />
            );
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaGraph }) }}
            />
            <article className={styles.container}>
                <div className={styles.innerContainer}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>{data.title || 'Untitled'}</h1>

                        <div className={styles.categoryBadge}>
                            <span className={styles.badge}>{data.category}</span>
                        </div>
                    </header>
                </div>

                {featuredImg && (
                    <div className={styles.featuredImageWrapper}>
                        <img
                            src={getOptimizedPexelsUrl(featuredImg, 1200)}
                            alt={data.ogImageAlt || data.title}
                            className={styles.featuredImage}
                            fetchPriority="high"
                            decoding="async"
                            width={1200}
                            height={Math.round((featuredImgHeight / featuredImgWidth) * 1200) || 800}
                        />
                    </div>
                )}

                <div className={styles.innerContainer}>
                    <div className={styles.articleLayout}>
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarMeta}>
                                <div className={styles.metaGroup}>
                                    <span className={styles.metaLabel}>Contributor</span>
                                    <div className={styles.authorSmall}>
                                        <img
                                            src="/author.jpeg"
                                            alt={data.author || AUTHOR_NAME}
                                            className={styles.authorSmallImg}
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {!data.author || data.author === AUTHOR_NAME ? (
                                            <Link href="/author/irfan-nasim" className={styles.metaValue}>
                                                {data.author || AUTHOR_NAME}
                                            </Link>
                                        ) : (
                                            <span className={styles.metaValue}>{data.author}</span>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.metaGroup}>
                                    <span className={styles.metaLabel}>Reading Time</span>
                                    <span className={styles.metaValue}>
                                        {Math.ceil(readingTime(content).minutes)} Minute
                                    </span>
                                </div>
                            </div>

                            <div className={styles.tocWrapper}>
                                <span className={styles.tocTitle}>On this page</span>
                                <TableOfContents toc={toc} />
                            </div>
                        </aside>

                        <div className={styles.mainContent}>
                            <div className="markdown-content">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={components}
                                >
                                    {content}
                                </ReactMarkdown>
                            </div>

                            {data.faqs && data.faqs.length > 0 && <FAQSection faqs={data.faqs} />}

                            {(() => {
                                const allPosts = getBlogPosts();
                                const currentIndex = allPosts.findIndex((p) => p.slug === slugPath);
                                const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
                                const prevPost =
                                    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

                                if (!nextPost && !prevPost) return null;

                                return (
                                    <nav className={styles.postNavigation} aria-label="Post navigation">
                                        {prevPost ? (
                                            <Link
                                                href={`/blog/${prevPost.slug}`}
                                                className={`${styles.navLink} ${styles.prevLink}`}
                                            >
                                                <span className={styles.navLabel}>Previous</span>
                                                <span className={styles.navTitle}>{prevPost.title}</span>
                                            </Link>
                                        ) : (
                                            <div className={styles.navEmpty} />
                                        )}

                                        {nextPost ? (
                                            <Link
                                                href={`/blog/${nextPost.slug}`}
                                                className={`${styles.navLink} ${styles.nextLink}`}
                                            >
                                                <span className={styles.navLabel}>Next</span>
                                                <span className={styles.navTitle}>{nextPost.title}</span>
                                            </Link>
                                        ) : (
                                            <div className={styles.navEmpty} />
                                        )}
                                    </nav>
                                );
                            })()}

                            <section className={styles.authorBio}>
                                <div className={styles.authorImageWrapper}>
                                    <img
                                        src="/author.jpeg"
                                        alt={AUTHOR_NAME}
                                        className={styles.authorImage}
                                        loading="lazy"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className={styles.authorDetails}>
                                    <h3 className={styles.authorName}>
                                        About <Link href="/author/irfan-nasim">{AUTHOR_NAME}</Link>
                                    </h3>
                                    <p className={styles.authorDescription}>{AUTHOR_BIO}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <BackToTop />
            </article>
        </>
    );
}
