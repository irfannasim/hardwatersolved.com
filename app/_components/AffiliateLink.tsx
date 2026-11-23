import React from 'react';
import { amazonProductUrl, withAffiliateTag } from '@/app/_utils/amazon';

// Server-compatible (no hooks, no 'use client'): usable from server and client
// components alike. Every Amazon link should be rendered through this, or
// through withAffiliateTag(), so the Associates tag and rel are never missed.

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>;

export type AffiliateLinkProps = AnchorProps & {
    /** Amazon ASIN. Takes precedence over href. */
    asin?: string;
    /** Full URL; amazon.com links are tagged, anything else passes through unchanged. */
    href?: string;
    children?: React.ReactNode;
    className?: string;
};

export const AFFILIATE_REL = 'sponsored nofollow noopener noreferrer';
const DEFAULT_IMAGE_LINK_LABEL = 'View on Amazon (opens in a new tab)';

function hasText(node: React.ReactNode): boolean {
    if (typeof node === 'string') return node.trim().length > 0;
    if (typeof node === 'number') return true;
    if (Array.isArray(node)) return node.some(hasText);
    if (React.isValidElement<{ children?: React.ReactNode }>(node)) return hasText(node.props.children);
    return false;
}

export default function AffiliateLink({ asin, href, children, ...rest }: AffiliateLinkProps) {
    const url = asin ? amazonProductUrl(asin) : withAffiliateTag(href || '');

    // Image-only (or icon-only) links need an accessible name.
    const ariaLabel = rest['aria-label'] ?? (hasText(children) ? undefined : DEFAULT_IMAGE_LINK_LABEL);

    return (
        <a {...rest} href={url} aria-label={ariaLabel} target="_blank" rel={AFFILIATE_REL}>
            {children}
        </a>
    );
}
