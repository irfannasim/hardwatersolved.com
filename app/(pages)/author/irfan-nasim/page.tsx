import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { getBlogPosts } from '@/app/_utils/blog';
import pageStyles from '../../static-page.module.css';
import styles from '../../author.module.css';

const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://hardwatersolved.com';
const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || 'Hard Water Solved';
const AUTHOR_NAME = 'Irfan Nasim';
const AUTHOR_EMAIL = 'sageattar12@gmail.com';
const AUTHOR_URL = `${SITE_DOMAIN}/author/irfan-nasim/`;

export default function AuthorPage() {
    const posts = getBlogPosts().filter((post) => !post.author || post.author === AUTHOR_NAME);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${AUTHOR_URL}#person`,
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
        image: `${SITE_DOMAIN}/author.jpeg`,
        jobTitle: 'Founder & Editor',
        email: `mailto:${AUTHOR_EMAIL}`,
        worksFor: {
            '@type': 'Organization',
            name: SITE_TITLE,
            url: SITE_DOMAIN,
        },
        description:
            "Irfan Nasim writes and edits Hard Water Solved. He is not a certified water-treatment professional — he researches each topic against primary sources before writing it up.",
    };

    return (
        <div className={pageStyles.pageContainer}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <main className={pageStyles.content}>
                <header className={styles.profileHeader}>
                    <Image
                        src="/author.jpeg"
                        alt={AUTHOR_NAME}
                        className={styles.photo}
                        width={152}
                        height={152}
                    />
                    <div className={styles.profileText}>
                        <h1>{AUTHOR_NAME}</h1>
                        <p className={styles.role}>Founder &amp; Editor, {SITE_TITLE}</p>
                        <p className={styles.profileBio}>
                            Irfan researches and writes every guide on Hard Water Solved, working from primary
                            sources like the EPA, CDC, NSF, and USGS instead of repeating whatever the rest of
                            the internet already says about hard water.
                        </p>
                        <div className={styles.contactRow}>
                            <a href={`mailto:${AUTHOR_EMAIL}`} className="primary-button">
                                <Mail size={18} />
                                {AUTHOR_EMAIL}
                            </a>
                        </div>
                    </div>
                </header>

                <section className={pageStyles.section}>
                    <h2>About Irfan</h2>
                    <p>
                        Irfan Nasim is the founder and editor of <strong>Hard Water Solved</strong>. His interest
                        in the subject started the ordinary way: dealing with scale, dull-lathering soap, and a
                        water heater that seemed to work harder every year, then getting frustrated at how much
                        of the advice online about it traced back to a softener manufacturer rather than an
                        independent source.
                    </p>
                    <p>
                        That frustration turned into this site. Every guide starts from a real homeowner question,
                        gets checked against primary sources, and gets rewritten until it says only what the
                        evidence actually supports — no more, no less.
                    </p>
                </section>

                <section className={pageStyles.section}>
                    <h2>How I Research and Write</h2>
                    <ul>
                        <li><strong>Primary sources first:</strong> EPA, CDC, NSF, USGS, and university extension programs are checked before anything gets published, especially for numbers, thresholds, and health-adjacent claims.</li>
                        <li><strong>One question at a time:</strong> each guide answers a single, specific question rather than merging several topics into a vague, catch-all article.</li>
                        <li><strong>Corrections are welcome:</strong> if a claim turns out to be outdated or wrong, it gets fixed — see <Link href="/contact">Contact</Link> to flag anything.</li>
                        <li><strong>No product bias in informational content:</strong> the guides that answer general questions don&apos;t exist to steer you toward a specific brand or model.</li>
                    </ul>
                </section>

                <section className={pageStyles.section}>
                    <h2>What I Don&apos;t Claim to Be</h2>
                    <p>
                        I&apos;m not a licensed plumber or a certified water-treatment professional, and I don&apos;t
                        present myself as one. For anything that needs hands-on judgment — sizing a system for
                        your specific plumbing, interpreting a borderline lab result, or diagnosing a problem
                        beyond hardness — my guides say so directly and point toward a qualified professional or
                        certified lab instead of guessing on your behalf.
                    </p>
                </section>

                <section className={pageStyles.section}>
                    <h2>Get in Touch</h2>
                    <p>
                        Questions, corrections, or a topic you&apos;d like covered — email me directly at{' '}
                        <a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>, or use the{' '}
                        <Link href="/contact">Contact page</Link>.
                    </p>
                </section>

                <section className={pageStyles.section}>
                    <h2>Articles by {AUTHOR_NAME}</h2>
                    {posts.length > 0 ? (
                        <div className={styles.postsList}>
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postItem}>
                                    <span className={styles.postTitle}>{post.title}</span>
                                    {post.date && <span className={styles.postDate}>{post.date}</span>}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.emptyPosts}>New guides are on the way — check back soon.</p>
                    )}
                </section>
            </main>
        </div>
    );
}
