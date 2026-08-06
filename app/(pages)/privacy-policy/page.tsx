import React from 'react';
import type { Metadata } from 'next';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy - Hard Water Solved',
    description: 'Our privacy policy outlines how we collect, use, and protect your data at Hard Water Solved.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.subtitle}>
                    Clear policies, plainly explained.
                </p>
            </header>

            <main className={styles.content}>
                <section className={styles.section}>
                    <h2>Introduction</h2>
                    <p>
                        At <strong>Hard Water Solved</strong> (reachable at https://hardwatersolved.com), one of our
                        main priorities is the privacy of our visitors. This Privacy Policy document contains types
                        of information that is collected and recorded by Hard Water Solved and how we use it.
                    </p>
                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do
                        not hesitate to contact us at sageattar12@gmail.com.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Log Files</h2>
                    <p>
                        Hard Water Solved follows a standard procedure of using log files. These files log visitors
                        when they visit websites. All hosting companies do this and a part of hosting services&apos;
                        analytics. The information collected by log files include internet protocol (IP) addresses,
                        browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                        and possibly the number of clicks. These are not linked to any information that is
                        personally identifiable. The purpose of the information is for analyzing trends,
                        administering the site, tracking users&apos; movement on the website, and gathering
                        demographic information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, Hard Water Solved uses &apos;cookies&apos;. These cookies are used
                        to store information including visitors&apos; preferences, and the pages on the website that
                        the visitor accessed or visited. The information is used to optimize the users&apos;
                        experience by customizing our web page content based on visitors&apos; browser type and/or
                        other information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Google DoubleClick DART Cookie</h2>
                    <p>
                        Google is one of a third-party vendor on our site. It also uses cookies, known as DART
                        cookies, to serve ads to our site visitors based upon their visit to hardwatersolved.com and
                        other sites on the internet. However, visitors may choose to decline the use of DART cookies
                        by visiting the Google ad and content network Privacy Policy at the following URL &ndash;{' '}
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Advertising Partners Privacy Policies</h2>
                    <p>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of
                        Hard Water Solved.
                    </p>
                    <p>
                        Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web
                        Beacons that are used in their respective advertisements and links that appear on Hard Water
                        Solved, which are sent directly to users&apos; browser. They automatically receive your IP
                        address when this occurs. These technologies are used to measure the effectiveness of their
                        advertising campaigns and/or to personalize the advertising content that you see on websites
                        that you visit.
                    </p>
                    <p>
                        Note that Hard Water Solved has no access to or control over these cookies that are used by
                        third-party advertisers.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Third Party Privacy Policies</h2>
                    <p>
                        Hard Water Solved&apos;s Privacy Policy does not apply to other advertisers or websites.
                        Thus, we are advising you to consult the respective Privacy Policies of these third-party ad
                        servers for more detailed information. It may include their practices and instructions
                        about how to opt-out of certain options.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Consent</h2>
                    <p>
                        By using our website, you hereby consent to our Privacy Policy and agree to its Terms and
                        Conditions.
                    </p>
                </section>
            </main>
        </div>
    );
}
