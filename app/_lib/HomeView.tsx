import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Droplet, ShieldCheck, Settings2 } from 'lucide-react';
import PageShell from '@/app/_components/PageShell';
import { getOptimizedPexelsUrl } from '@/app/_utils/image';
import { getBlogPosts, type BlogPost } from '@/app/_utils/blog';
import styles from '@/app/page.module.css';

const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://hardwatersolved.com';
const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || 'Hard Water Solved';
const SITE_DESCRIPTION =
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Plain-English, research-backed guides on hard water, water softeners, and whole-house water treatment.';

export function buildHomeMetadata(): Metadata {
    const title = `${SITE_TITLE} - Hard Water & Water Softener Guides`;
    const url = `${SITE_DOMAIN}/`;

    return {
        title,
        description: SITE_DESCRIPTION,
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: url,
        },
        openGraph: {
            locale: 'en_US',
            type: 'website',
            title,
            description: SITE_DESCRIPTION,
            url,
            siteName: SITE_TITLE,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: SITE_DESCRIPTION,
        },
    };
}

function formatDate(date: string) {
    if (!date) return '';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(parsedDate);
}

function PostMeta({ post }: { post: BlogPost }) {
    const formatted = formatDate(post.date);
    return (
        <p className={styles.meta}>
            {formatted && <span>{formatted}</span>}
            {formatted && post.author && <span className={styles.metaDot} aria-hidden="true" />}
            {post.author && <span>{post.author}</span>}
        </p>
    );
}

function ArticleImage({ post, size = 700 }: { post: BlogPost; size?: number }) {
    if (!post.featuredImage) {
        return <div className={styles.imageFallback}>{post.title}</div>;
    }

    return (
        <Image
            src={getOptimizedPexelsUrl(post.featuredImage, size)}
            alt={post.title}
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw"
            loading="lazy"
        />
    );
}

export default function HomeView() {
    const posts = getBlogPosts();
    const articlePosts = posts.slice(0, 6);

    const homeUrl = `${SITE_DOMAIN}/`;

    const schemaGraph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${homeUrl}#organization`,
                name: SITE_TITLE,
                url: SITE_DOMAIN,
                logo: {
                    '@type': 'ImageObject',
                    '@id': `${homeUrl}#logo`,
                    url: `${SITE_DOMAIN}/logo.svg`,
                    contentUrl: `${SITE_DOMAIN}/logo.svg`,
                    caption: SITE_TITLE,
                    inLanguage: 'en-US',
                },
            },
            {
                '@type': 'WebSite',
                '@id': `${homeUrl}#website`,
                url: SITE_DOMAIN,
                name: SITE_TITLE,
                publisher: { '@id': `${homeUrl}#organization` },
                inLanguage: 'en-US',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${homeUrl}?s={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            },
            {
                '@type': 'CollectionPage',
                '@id': `${homeUrl}#webpage`,
                url: homeUrl,
                name: `${SITE_TITLE} - Hard Water & Water Softener Guides`,
                about: { '@id': `${homeUrl}#organization` },
                isPartOf: { '@id': `${homeUrl}#website` },
                inLanguage: 'en-US',
            },
        ],
    };

    return (
        <PageShell>
            <div className={styles.container}>
                <script
                    type="application/ld+json"
                    className="rank-math-schema"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
                />

                <section className={styles.hero} aria-labelledby="hero-heading">
                    <div className={styles.heroContent}>
                        <p className={styles.heroEyebrow}>Independent &middot; Research-Backed &middot; Plain English</p>
                        <h1 id="hero-heading" className={styles.heroTitle}>
                            Hard water shouldn&apos;t be <span className={styles.highlight}>a mystery</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We break down what hard water actually does to your home, how whole-house softeners
                            work, and how to tell whether you need one &mdash; using primary sources like the EPA,
                            CDC, and NSF instead of sales pitches.
                        </p>
                        <div className={styles.heroActions}>
                            <Link href="/blog" className={styles.ctaButton}>
                                Browse the Guides <ArrowRight size={20} />
                            </Link>
                            <Link href="/about" className={styles.secondaryButton}>
                                How We Research
                            </Link>
                        </div>
                    </div>
                </section>

                <svg className={styles.waveDivider} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z" />
                </svg>

                <section className={styles.helpSection} aria-labelledby="help-heading">
                    <div className={styles.sectionHeaderCentered}>
                        <h2 id="help-heading">What You&apos;ll Find Here</h2>
                        <p>No product pushing &mdash; just the evidence and reasoning behind each recommendation.</p>
                    </div>
                    <div className={styles.helpGrid}>
                        <div className={`${styles.helpCard} glass-card`}>
                            <div className={styles.helpIcon}><Droplet size={30} /></div>
                            <h3>Test &amp; Diagnose</h3>
                            <p>How to actually confirm hard water in your home &mdash; no guesswork, just measurable evidence like grains per gallon and ppm.</p>
                        </div>
                        <div className={`${styles.helpCard} glass-card`}>
                            <div className={styles.helpIcon}><Settings2 size={30} /></div>
                            <h3>How Softening Works</h3>
                            <p>Plain-English breakdowns of ion exchange, resin, and regeneration cycles &mdash; and what a whole-house softener can&apos;t do.</p>
                        </div>
                        <div className={`${styles.helpCard} glass-card`}>
                            <div className={styles.helpIcon}><ShieldCheck size={30} /></div>
                            <h3>Decide With Confidence</h3>
                            <p>Compare softening against filtration, conditioning, and no treatment at all, so you only buy what your water actually needs.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.articlesSection} aria-labelledby="articles-heading">
                    <div className={styles.sectionHeader}>
                        <h2 id="articles-heading">Latest Guides</h2>
                        <Link href="/blog" className={styles.viewAll}>
                            Browse all guides
                        </Link>
                    </div>

                    {posts.length > 0 ? (
                        <div className={styles.articleGrid}>
                            {articlePosts.map((post) => (
                                <article className={`${styles.articleCard} glass-card`} key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className={styles.imageLink} aria-label={post.title}>
                                        <ArticleImage post={post} />
                                        {post.category && <span className={styles.categoryTag}>{post.category}</span>}
                                    </Link>
                                    <div className={styles.cardContent}>
                                        <PostMeta post={post} />
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                            Read the guide <ArrowRight size={18} strokeWidth={2} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.comingSoon}>
                            <Droplet size={40} />
                            <h3>New guides are on the way</h3>
                            <p>We&apos;re researching and writing the first batch of hard water and water softener guides. Check back soon.</p>
                        </div>
                    )}
                </section>
            </div>
        </PageShell>
    );
}
