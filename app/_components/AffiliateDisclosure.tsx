import Link from 'next/link';

export const AFFILIATE_DISCLOSURE_TEXT =
    'As an Amazon Associate I earn from qualifying purchases. This page contains affiliate links.';

type Props = {
    /**
     * "article": the full statement, shown above the body of any page with
     * affiliate links. "footer": site-wide, so it omits "This page contains
     * affiliate links", which is not true of every page.
     */
    variant?: 'article' | 'footer';
    className?: string;
};

// Rendered as a <div>, not a <p>: article pages style `.mainContent p:first-of-type`
// as the lead paragraph, and the disclosure must not pick that up.
export default function AffiliateDisclosure({ variant = 'article', className }: Props) {
    const text =
        variant === 'footer' ? 'As an Amazon Associate I earn from qualifying purchases.' : AFFILIATE_DISCLOSURE_TEXT;

    return (
        <div className={className} role="note" aria-label="Affiliate disclosure">
            {text}{' '}
            <Link href="/affiliate-disclosure/">Affiliate disclosure</Link>
        </div>
    );
}
