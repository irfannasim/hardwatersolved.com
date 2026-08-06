import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || "Hard Water Solved";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoWrapper}>
                        <Image
                            src="/logo.svg"
                            alt=""
                            aria-hidden="true"
                            className={styles.logoImage}
                            width={38}
                            height={38}
                        />
                    </span>
                    <span className={styles.logoText}>{SITE_TITLE}</span>
                </Link>

                <nav className={styles.nav} aria-label="Main navigation">
                    <Link href="/blog" className={styles.navLink}>Guides</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>

                <details className={styles.navMenu}>
                    <summary className={styles.menuButton} aria-label="Toggle menu">
                        <span className={styles.menuIcon} aria-hidden="true" />
                    </summary>

                    <nav className={styles.mobileNav} aria-label="Mobile navigation">
                        <Link href="/blog" className={styles.navLink}>Guides</Link>
                        <Link href="/about" className={styles.navLink}>About</Link>
                        <Link href="/contact" className={styles.navLink}>Contact</Link>
                        <Link href="/privacy-policy" className={styles.navLink}>Privacy</Link>
                        <Link href="/terms-conditions" className={styles.navLink}>Terms</Link>
                        <Link href="/disclaimer" className={styles.navLink}>Disclaimer</Link>
                    </nav>
                </details>
            </div>
        </header>
    );
}
