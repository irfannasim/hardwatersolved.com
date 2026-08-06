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

// Resolve the markdown file for a post slug. Returns null if the slug
// contains unsafe path segments.
export function getBlogPostFilePath(slug: string[]) {
    if (slug.some((segment) => segment === '..' || segment.includes('/') || segment.includes('\\'))) {
        return null;
    }
    return path.join(getBlogContentDir(), ...slug) + '.md';
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

    const posts = getBlogMarkdownFiles(blogDir)
        .map((filePath) => {
            const slug = path
                .relative(blogDir, filePath)
                .replace(/\\/g, '/')
                .replace(/\.md$/, '');
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
