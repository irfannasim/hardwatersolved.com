import React from 'react';
import type { Metadata } from 'next';
import BlogIndexView from '@/app/_lib/BlogIndexView';

export const metadata: Metadata = {
    title: 'Hard Water & Water Softener Guides | Hard Water Solved',
    description:
        'A research library of hard water and whole-house water softener guides: testing, how softening works, sizing, maintenance, and decision-making.',
};

export default function BlogIndex() {
    return <BlogIndexView currentPage={1} />;
}
