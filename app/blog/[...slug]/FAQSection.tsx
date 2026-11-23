'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import styles from './page.module.css';
import type { Components } from 'react-markdown';
import AffiliateLink from '@/app/_components/AffiliateLink';
import { isTaggableAmazonUrl } from '@/app/_utils/amazon';

// amazon.com links in FAQ answers get the Associates tag and sponsored rel;
// every other link renders exactly as before.
const faqComponents: Components = {
    // `node` (the hast element) is dropped so it never reaches the DOM.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    a: ({ node, href, children, ...props }) =>
        typeof href === 'string' && isTaggableAmazonUrl(href) ? (
            <AffiliateLink {...props} href={href}>
                {children}
            </AffiliateLink>
        ) : (
            <a {...props} href={href}>
                {children}
            </a>
        ),
};

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <h3
                className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
            </h3>
            <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerOpen : ''}`}>
                <div className={styles.faqAnswer}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeSlug, rehypeRaw]}
                        components={faqComponents}
                    >
                        {answer}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

interface FAQSectionProps {
    faqs: Array<{ question: string; answer: string }>;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqHeader}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqGrid}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
