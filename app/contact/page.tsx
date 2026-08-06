import React from 'react';
import type { Metadata } from 'next';
import { Mail, MessageCircle, Wrench } from 'lucide-react';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
    title: 'Contact Us - Hard Water Solved',
    description: 'Get in touch with Hard Water Solved for questions, corrections, or feedback about our hard water and water softener guides.',
};

export default function ContactPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    Have a question, correction, or a topic you want covered? We&apos;d like to hear it.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Get in Touch</h2>
                    <p>
                        Whether you spotted something that needs fixing, have a hard water question we haven&apos;t
                        answered yet, or want to suggest a topic, reach out below. We read every message and aim to
                        respond within 48 hours.
                    </p>
                </section>

                <div className={styles.contactInfo}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Mail size={20} color="var(--color-accent)" />
                        <strong>General Inquiries:</strong> hello@hardwatersolved.com
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <MessageCircle size={20} color="var(--color-accent)" />
                        <strong>Corrections &amp; Editorial:</strong> editorial@hardwatersolved.com
                    </p>
                </div>

                <section className={styles.section} style={{ marginTop: '3rem' }}>
                    <h2>Looking for Hands-On Service?</h2>
                    <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <Wrench size={20} color="var(--color-accent)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>
                            Hard Water Solved is an independent information resource, not a plumbing or installation
                            company. For sizing, installing, or repairing a water softener at your home, please
                            contact a licensed local water-treatment professional or plumber.
                        </span>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Feedback</h2>
                    <p>
                        Your feedback keeps our guides accurate. If you notice an outdated figure, a broken source
                        link, or a claim that doesn&apos;t hold up, let us know and we&apos;ll review and correct it.
                    </p>
                </section>
            </main>
        </div>
    );
}
