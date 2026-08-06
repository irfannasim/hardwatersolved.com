import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
    title: 'About Us - Hard Water Solved',
    description: 'Learn about the mission and research approach behind Hard Water Solved, an independent guide to hard water and whole-house water softeners.',
};

export default function AboutPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>About Hard Water Solved</h1>
                <p className={styles.subtitle}>
                    Plain-English answers about hard water and whole-house softening, built on primary sources
                    instead of sales copy.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Our Mission</h2>
                    <p>
                        <strong>Hard Water Solved</strong> exists because most hard water advice online is written to
                        sell a specific softener, not to help you understand your own water. We do the opposite: we
                        answer one question at a time &mdash; clearly, honestly, and with the evidence shown &mdash;
                        so you can decide what your household actually needs before you spend a dollar.
                    </p>
                    <p>
                        We are an independent, informational resource. We are not a plumbing company, a softener
                        manufacturer, or a certified water-treatment installer, and none of our articles are written
                        to move you toward a specific product or brand.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Who Writes This</h2>
                    <p>
                        Hard Water Solved is written and edited by <strong>Irfan Nasim</strong>. Irfan is not a
                        licensed water-treatment professional or plumber &mdash; and he doesn&apos;t claim to be one.
                        What he does is research each topic thoroughly before writing about it: reading primary
                        sources such as the EPA, CDC, NSF, USGS, and university extension programs, comparing what
                        they actually say against common claims made online, and writing up only what holds up.
                    </p>
                    <p>
                        Where a question genuinely requires a licensed professional &mdash; sizing a system for your
                        specific plumbing, interpreting a borderline water test, or anything safety-related &mdash;
                        our articles say so directly and point you toward that next step instead of guessing.
                    </p>
                    <p>
                        Read <Link href="/author/irfan-nasim">Irfan&apos;s full author bio</Link> for more on his
                        research approach and every guide he&apos;s published.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>What We Cover</h2>
                    <ul>
                        <li><strong>Hard Water Fundamentals:</strong> What hardness is, how it&apos;s measured (grains per gallon, ppm as CaCO&#8323;), and how to confirm you actually have it.</li>
                        <li><strong>How Softeners Work:</strong> Ion exchange, resin, brine and regeneration cycles, sizing, and maintenance &mdash; explained without jargon.</li>
                        <li><strong>Decision-Making:</strong> When a whole-house softener is the right tool, when a filter or conditioner fits better, and when no treatment is needed at all.</li>
                        <li><strong>Troubleshooting &amp; Costs:</strong> Common problems, realistic running costs, and what trade-offs actually look like in practice.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Our Commitment to Accuracy</h2>
                    <p>
                        Every article is built around a real homeowner question and grounded in current primary or
                        authoritative sources for any numerical threshold, health claim, or plumbing guidance. We
                        avoid overstating what a water softener can do, and we say clearly when a claim is disputed
                        or when we&apos;re not certain. If you notice something that needs correcting, we want to
                        hear about it &mdash; see our <a href="/contact">Contact page</a>.
                    </p>
                </section>
            </main>
        </div>
    );
}
