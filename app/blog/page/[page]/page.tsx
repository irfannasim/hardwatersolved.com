import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogIndexView, { POSTS_PER_PAGE } from '@/app/_lib/BlogIndexView';
import { getBlogPosts } from '@/app/_utils/blog';

export const dynamicParams = false;

type BlogPageIndexProps = {
    params: Promise<{ page: string }>;
};

export async function generateMetadata(props: BlogPageIndexProps): Promise<Metadata> {
    const params = await props.params;
    return {
        title: `Hard Water & Water Softener Guides - Page ${params.page} | Hard Water Solved`,
        description: `Page ${params.page} of Hard Water Solved guides on hard water, water softeners, testing, and whole-house treatment.`,
    };
}

export async function generateStaticParams() {
    const allPosts = getBlogPosts();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    // We start from page 2, since page 1 is the main /blog route
    const paths = [];
    for (let i = 2; i <= totalPages; i++) {
        paths.push({ page: i.toString() });
    }

    // Next.js static export requires at least one path to be returned, otherwise it throws "missing generateStaticParams()"
    if (paths.length === 0) {
        paths.push({ page: '2' });
    }

    return paths;
}

export default async function BlogPageIndex(props: BlogPageIndexProps) {
    const params = await props.params;
    const currentPage = parseInt(params.page, 10);

    if (isNaN(currentPage) || currentPage < 2) {
        notFound();
    }

    const allPosts = getBlogPosts();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    if (currentPage > totalPages) {
        notFound();
    }

    return <BlogIndexView currentPage={currentPage} />;
}
