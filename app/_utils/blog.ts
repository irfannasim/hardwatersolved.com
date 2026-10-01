import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    featuredImage?: string | null;
    excerpt: string;
    author?: string;
    category?: string;
}

export function getBlogContentDir() {
    return path.join(process.cwd(), 'content', 'blog');
}

export function getBlogMarkdownFiles(dir = getBlogContentDir()): string[] {
    if (!fs.existsSync(dir)) return [];

    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            return getBlogMarkdownFiles(entryPath);
        }

        return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
    });
}

// Subfolders of content/blog (money-pages/, info-pages/) are internal grouping
// only: a post's slug is its filename, so every post publishes at /blog/<slug>/
// whichever folder holds it.
export function getBlogPostSlug(filePath: string) {
    return path.basename(filePath, '.md');
}

// Map every slug to its file. Two files with the same name in different
// folders would claim the same URL, so that fails the build.
export function getBlogPostIndex(dir = getBlogContentDir()) {
    const index = new Map<string, string>();
    for (const filePath of getBlogMarkdownFiles(dir)) {
        const slug = getBlogPostSlug(filePath);
        const existing = index.get(slug);
        if (existing) {
            throw new Error(`Duplicate blog slug "${slug}": ${existing} and ${filePath}`);
        }
        index.set(slug, filePath);
    }
    return index;
}

// Resolve the markdown file for a post slug. Returns null for anything but a
// single known slug, so folder paths like /blog/money-pages/<slug>/ do not exist.
export function getBlogPostFilePath(slug: string[]) {
    if (slug.length !== 1) return null;
    return getBlogPostIndex().get(slug[0]) ?? null;
}

export function resolveImageUrl(src: string, frontmatterBase: string) {
    if (!src || src.startsWith('http')) return src;
    let fullSrc = src;
    if (frontmatterBase && !src.startsWith('/')) {
        const base = frontmatterBase.endsWith('/') ? frontmatterBase : frontmatterBase + '/';
        fullSrc = `${base}${src}`;
    }
    if (!fullSrc.startsWith('/')) {
        fullSrc = `/${fullSrc}`;
    }
    return fullSrc;
}

export function getBlogPosts(): BlogPost[] {
    const blogDir = getBlogContentDir();

    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const posts = [...getBlogPostIndex(blogDir)]
        .map(([slug, filePath]) => {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            let featuredImage = data.featuredImage ? resolveImageUrl(data.featuredImage, '/') : null;
            if (featuredImage && !featuredImage.startsWith('http')) {
                const publicPath = path.join(process.cwd(), 'public', featuredImage);
                if (!fs.existsSync(publicPath)) {
                    featuredImage = null;
                }
            }

            return {
                slug,
                title: data.title || 'Untitled Post',
                date: data.date || '',
                featuredImage,
                excerpt: data.excerpt || '',
                author: data.author || '',
                category: data.category || ''
            };
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return posts;
}
