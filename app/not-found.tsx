import React from 'react';
import Link from 'next/link';
import { BookOpen, Home, Droplet } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <div className={styles.iconBadge} aria-hidden="true">
                    <Droplet size={40} />
                </div>

                <p className={styles.eyebrow}>Page Not Found</p>
                <div className={styles.errorCode}>404</div>

                <h1 className={styles.title}>
                    This page ran dry
                </h1>

                <p className={styles.description}>
                    We couldn&apos;t find the guide you&apos;re looking for. It may have moved, been renamed,
                    or never existed at this address.
                </p>

                <div className={styles.actionButtons}>
                    <Link href="/" className={styles.primaryButton}>
                        <Home size={18} />
                        Return Home
                    </Link>

                    <Link href="/blog" className={styles.secondaryButton}>
                        <BookOpen size={18} />
                        Browse Guides
                    </Link>
                </div>
            </main>
        </div>
    );
}
