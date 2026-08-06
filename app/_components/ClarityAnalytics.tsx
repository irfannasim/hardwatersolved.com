'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

type ClarityAnalyticsProps = {
    projectId?: string;
};

export default function ClarityAnalytics({ projectId }: ClarityAnalyticsProps) {
    useEffect(() => {
        if (!projectId) return;

        const initClarity = () => {
            Clarity.init(projectId);
        };

        if ('requestIdleCallback' in window) {
            const idleId = window.requestIdleCallback(initClarity);
            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = globalThis.setTimeout(initClarity, 1500);
        return () => globalThis.clearTimeout(timeoutId);
    }, [projectId]);

    return null;
}
