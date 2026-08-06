import React from 'react';
import type { Metadata } from 'next';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Hard Water Solved',
    description: 'The terms and conditions for using the Hard Water Solved website.',
};

export default function TermsConditionsPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Terms and Conditions</h1>
                <p className={styles.subtitle}>
                    Guidelines for using our research and articles.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Welcome to Hard Water Solved</h2>
                    <p>
                        These terms and conditions outline the rules and regulations for the use of Hard Water
                        Solved&apos;s Website, located at https://hardwatersolved.com.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue
                        to use Hard Water Solved if you do not agree to take all of the terms and conditions stated
                        on this page.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>License</h2>
                    <p>
                        Unless otherwise stated, Hard Water Solved and/or its licensors own the intellectual
                        property rights for all material on Hard Water Solved. All intellectual property rights are
                        reserved. You may access this from Hard Water Solved for your own personal use subjected to
                        restrictions set in these terms and conditions.
                    </p>
                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from Hard Water Solved</li>
                        <li>Sell, rent or sub-license material from Hard Water Solved</li>
                        <li>Reproduce, duplicate or copy material from Hard Water Solved</li>
                        <li>Redistribute content from Hard Water Solved</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>User Comments</h2>
                    <p>
                        Parts of this website offer an opportunity for users to post and exchange opinions and
                        information in certain areas of the website. Hard Water Solved does not filter, edit,
                        publish or review Comments prior to their presence on the website. Comments do not reflect
                        the views and opinions of Hard Water Solved, its agents and/or affiliates.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Content Liability</h2>
                    <p>
                        We shall not be held responsible for any content that appears on your Website. You agree to
                        protect and defend us against all claims that are rising on your Website. No link(s) should
                        appear on any Website that may be interpreted as libellous, obscene or criminal, or which
                        infringes, otherwise violates, or advocates the infringement or other violation of, any
                        third party rights.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Disclaimer</h2>
                    <p>
                        To the maximum extent permitted by applicable law, we exclude all representations,
                        warranties and conditions relating to our website and the use of this website. Nothing in
                        this disclaimer will:
                    </p>
                    <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
                    </ul>
                    <p>
                        See our full <a href="/disclaimer">Disclaimer</a> page for details specific to our hard
                        water and water treatment content.
                    </p>
                </section>
            </main>
        </div>
    );
}
