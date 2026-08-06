'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, List } from 'lucide-react';
import styles from './TableOfContents.module.css';

interface TOCItem {
    level: number;
    text: string;
    slug: string;
}

interface TableOfContentsProps {
    toc: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {
    const [activeSlug, setActiveSlug] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // Update active slug on scroll
    useEffect(() => {
        const handleScroll = () => {
            const headingElements = toc
                .map((item) => document.getElementById(item.slug))
                .filter((el): el is HTMLElement => el !== null);

            const scrollPosition = window.scrollY + 120;

            let currentActive = '';
            for (let i = 0; i < headingElements.length; i++) {
                const element = headingElements[i];
                if (element.offsetTop <= scrollPosition) {
                    currentActive = element.id;
                } else {
                    break;
                }
            }

            if (currentActive !== activeSlug) {
                setActiveSlug(currentActive);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [toc, activeSlug]);

    // Scroll active item into view in the TOC container
    useEffect(() => {
        if (!activeSlug || !navRef.current) return;

        // Only run this on desktop where the sidebar is visible, or when mobile menu is expanded
        if (window.innerWidth <= 1024 && !isExpanded) return;

        const container = navRef.current;
        const activeEl = container.querySelector(`a[href="#${CSS.escape(activeSlug)}"]`) as HTMLElement;

        if (activeEl) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = activeEl.getBoundingClientRect();

            // If the element is outside the visible area of the container, scroll to it
            if (elementRect.top < containerRect.top) {
                container.scrollBy({ top: elementRect.top - containerRect.top - 20, behavior: 'smooth' });
            } else if (elementRect.bottom > containerRect.bottom) {
                container.scrollBy({ top: elementRect.bottom - containerRect.bottom + 20, behavior: 'smooth' });
            }
        }
    }, [activeSlug, isExpanded]);

    if (!toc || toc.length === 0) return null;

    const activeItem = toc.find(item => item.slug === activeSlug) || toc[0];

    return (
        <div className={`${styles.toc} ${isExpanded ? styles.isExpanded : ''}`}>
            {/* Mobile Header - Only visible on responsive */}
            <button
                className={styles.mobileHeader}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className={styles.mobileCurrent}>
                    <List size={18} className={styles.mobileIcon} />
                    <span>{activeItem.text}</span>
                </div>
                <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${isExpanded ? styles.chevronRotated : ''}`}
                />
            </button>

            <nav className={styles.tocContent} ref={navRef}>
                <ul className={styles.tocList}>
                    {toc.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.tocItem} ${item.level === 3 ? styles.level3 : ''}`}
                        >
                            <a
                                href={`#${item.slug}`}
                                className={`${styles.tocLink} ${activeSlug === item.slug ? styles.active : ''}`}
                                onClick={() => setIsExpanded(false)}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContents;
