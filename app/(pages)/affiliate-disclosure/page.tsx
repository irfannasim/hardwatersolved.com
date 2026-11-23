import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../static-page.module.css';

const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || 'Hard Water Solved';

export const metadata: Metadata = {
    title: `Affiliate Disclosure - ${SITE_TITLE}`,
    description: `How ${SITE_TITLE} uses Amazon affiliate links, and how that does and does not affect what we publish.`,
};

export default function AffiliateDisclosurePage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Affiliate Disclosure</h1>
                <p className={styles.subtitle}>
                    How we earn money from some links on this site, and what that means for you.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Amazon Associates Program</h2>
                    <p>
                        <strong>{SITE_TITLE}</strong> is a participant in the Amazon Services LLC Associates Program,
                        an affiliate advertising program designed to provide a means for sites to earn advertising
                        fees by advertising and linking to Amazon.com.
                    </p>
                    <p>As an Amazon Associate I earn from qualifying purchases.</p>
                </section>

                <section className={styles.section}>
                    <h2>What This Means for You</h2>
                    <p>
                        Some pages on this site, mainly product reviews, comparisons and buying guides, contain
                        links to products on Amazon.com. If you follow one of those links and make a qualifying
                        purchase, we may earn a commission. The price you pay is the same whether or not you use
                        our link.
                    </p>
                    <p>
                        Pages that contain affiliate links say so near the top, before the first product link.
                        Those links are marked as sponsored.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Prices and Availability</h2>
                    <p>
                        We do not list Amazon prices or promise that a product is in stock, because both change
                        often. Check the current price and availability on Amazon before you buy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Our Editorial Independence</h2>
                    <p>
                        Affiliate relationships do not decide which products we recommend or what we say about
                        them. Our guides are researched against primary sources and manufacturer documentation,
                        as described on our <Link href="/about/">About</Link> page. See also our{' '}
                        <Link href="/disclaimer/">Disclaimer</Link>.
                    </p>
                </section>
            </main>
        </div>
    );
}
