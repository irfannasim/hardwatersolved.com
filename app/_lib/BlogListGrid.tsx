import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Droplet } from 'lucide-react';
import { getOptimizedPexelsUrl } from '@/app/_utils/image';
import { BlogPost } from '@/app/_utils/blog';
import styles from '@/app/blog/page.module.css';

interface BlogListGridProps {
    posts: BlogPost[];
    currentPage: number;
    totalPages: number;
}

export default function BlogListGrid({ posts, currentPage, totalPages }: BlogListGridProps) {
    const basePath = '/blog';

    if (posts.length === 0) {
        return (
            <div className={styles.emptyState}>
                <Droplet size={56} className={styles.emptyIcon} />
                <h2 className={styles.emptyTitle}>No Guides Published Yet</h2>
                <p className={styles.emptySubtitle}>New research-backed guides on hard water and softening are coming soon.</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.grid}>
                {posts.map((post, index) => (
                    <div key={post.slug} className={styles.card}>
                        <Link href={`/blog/${post.slug}`} className={styles.imageWrapper} aria-label={post.title}>
                            {post.featuredImage && (
                                <Image
                                    src={getOptimizedPexelsUrl(post.featuredImage, 600)}
                                    alt=""
                                    className={styles.image}
                                    width={600}
                                    height={450}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 33vw"
                                    priority={index === 0}
                                />
                            )}
                            {post.category && <span className={styles.categoryTag}>{post.category}</span>}
                        </Link>
                        <div className={styles.content}>
                            <div className={styles.meta}>
                                <span>{post.date}</span>
                                <span className={styles.metaDot} aria-hidden="true" />
                                <span>{post.author}</span>
                            </div>
                            <h2 className={styles.cardTitle}>
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className={styles.action}>
                                Read the guide <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <nav className={styles.pagination}>
                    {currentPage > 1 ? (
                        <Link
                            href={currentPage === 2 ? basePath : `${basePath}/page/${currentPage - 1}`}
                            className={styles.paginationLink}
                        >
                            <ArrowLeft size={18} /> Previous
                        </Link>
                    ) : (
                        <span className={`${styles.paginationLink} ${styles.paginationLinkDisabled}`}>
                            <ArrowLeft size={18} /> Previous
                        </span>
                    )}

                    <span className={styles.pageInfo}>
                        Page {currentPage} of {totalPages}
                    </span>

                    {currentPage < totalPages ? (
                        <Link
                            href={`${basePath}/page/${currentPage + 1}`}
                            className={styles.paginationLink}
                        >
                            Next <ArrowRight size={18} />
                        </Link>
                    ) : (
                        <span className={`${styles.paginationLink} ${styles.paginationLinkDisabled}`}>
                            Next <ArrowRight size={18} />
                        </span>
                    )}
                </nav>
            )}
        </>
    );
}
