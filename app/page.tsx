import React from 'react';
import type { Metadata } from 'next';
import HomeView, { buildHomeMetadata } from '@/app/_lib/HomeView';

export const metadata: Metadata = buildHomeMetadata();

export default function Page() {
    return <HomeView />;
}
