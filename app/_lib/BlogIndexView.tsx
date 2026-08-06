import React from 'react';
import BlogListGrid from '@/app/_lib/BlogListGrid';
import { getBlogPosts } from '@/app/_utils/blog';
import styles from '@/app/blog/page.module.css';

export const POSTS_PER_PAGE = 12;

export default function BlogIndexView({ currentPage = 1 }: { currentPage?: number }) {
    const allPosts = getBlogPosts();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <header className={styles.libraryHeader}>
                    <p className={styles.eyebrow}>Research Library</p>
                    <h1 className={styles.libraryTitle}>Hard water and water softeners, explained clearly</h1>
                </header>
                <BlogListGrid posts={currentPosts} currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    );
}
