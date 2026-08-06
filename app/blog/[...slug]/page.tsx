import type { Metadata } from 'next';
import BlogPostView, { buildBlogPostMetadata, blogPostStaticParams } from '@/app/_lib/BlogPostView';

type BlogPostProps = {
    params: Promise<{ slug: string[] }>;
};

export async function generateMetadata(props: BlogPostProps): Promise<Metadata> {
    const { slug } = await props.params;
    return buildBlogPostMetadata(slug);
}

export async function generateStaticParams() {
    return blogPostStaticParams();
}

export default async function BlogPost(props: BlogPostProps) {
    const { slug } = await props.params;
    return <BlogPostView slug={slug} />;
}
