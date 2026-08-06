import React from 'react';
import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";

export const metadata: Metadata = {
    title: "Hard Water & Water Softener Guides - Hard Water Solved",
    description: "Research-led guides on hard water, whole-house water softeners, testing, sizing, maintenance, and how to decide what your home actually needs.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PageShell>{children}</PageShell>;
}
