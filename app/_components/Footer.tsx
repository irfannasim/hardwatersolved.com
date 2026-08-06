import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';

const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || "Hard Water Solved";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.svg" alt="" aria-hidden="true" width={34} height={34} />
                            <span className={styles.logoText}>{SITE_TITLE}</span>
                        </Link>
                        <p className={styles.description}>
                            Plain-English, research-backed guides on hard water, water softeners, and
                            whole-house treatment &mdash; so you can make an informed decision, not a rushed one.
                        </p>
                    </div>

                    <nav className={styles.linkCol} aria-label="Explore">
                        <span className={styles.colHeading}>Explore</span>
                        <Link href="/blog" className={styles.link}>Guides</Link>
                        <Link href="/about" className={styles.link}>About</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </nav>

                    <nav className={styles.linkCol} aria-label="Legal">
                        <span className={styles.colHeading}>Legal</span>
                        <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
                        <Link href="/terms-conditions" className={styles.link}>Terms &amp; Conditions</Link>
                        <Link href="/disclaimer" className={styles.link}>Disclaimer</Link>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <span>Copyright {year} {SITE_TITLE}. All rights reserved.</span>
                    <span className={styles.bottomNote}>
                        Educational content only &mdash; not a substitute for a licensed water treatment professional.
                    </span>
                </div>
            </div>
        </footer>
    );
}
