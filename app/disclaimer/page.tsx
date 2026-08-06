import React from 'react';
import type { Metadata } from 'next';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
    title: 'Disclaimer - Hard Water Solved',
    description: 'The legal disclaimer for the hard water and water softener content published on Hard Water Solved.',
};

export default function DisclaimerPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Disclaimer</h1>
                <p className={styles.subtitle}>
                    Please read this before acting on anything you find on our site.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>General Information</h2>
                    <p>
                        The information provided by <strong>Hard Water Solved</strong> (&quot;we,&quot; &quot;us,&quot; or
                        &quot;our&quot;) on https://hardwatersolved.com (the &quot;Site&quot;) is for general
                        informational purposes only. All information on the Site is provided in good faith, however
                        we make no representation or warranty of any kind, express or implied, regarding the
                        accuracy, adequacy, validity, reliability, availability, or completeness of any information
                        on the Site.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Not Professional Water Treatment or Plumbing Advice</h2>
                    <p>
                        Our articles explain hard water, water softeners, and whole-house treatment in general
                        terms. They are not a substitute for an on-site evaluation by a licensed plumber or water
                        treatment professional, who can account for your specific plumbing, water chemistry, and
                        local code requirements. Before installing, modifying, or repairing a water treatment
                        system, consult a qualified professional.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Health and Water Quality Disclaimer</h2>
                    <p>
                        Content discussing water hardness, minerals, or water quality is for educational purposes
                        only and is not medical or health advice. Hardness alone does not indicate whether water is
                        safe to drink. If you have concerns about your water&apos;s safety, have it tested by a
                        certified laboratory and consult your local water utility or health department rather than
                        relying solely on this Site.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>External Links Disclaimer</h2>
                    <p>
                        The Site may contain (or you may be sent through the Site) links to other websites or
                        content belonging to or originating from third parties, including government and research
                        organizations we cite as sources. Such external links are not investigated, monitored, or
                        checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Affiliate Disclaimer</h2>
                    <p>
                        Some pages on the Site may in the future contain affiliate links, meaning we may earn a
                        commission if you make a purchase through such a link, at no additional cost to you. Any
                        affiliate relationship does not influence the factual claims made in our informational
                        articles.
                    </p>
                </section>
            </main>
        </div>
    );
}
