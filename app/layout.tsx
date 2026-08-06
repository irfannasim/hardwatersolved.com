import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import ClarityAnalytics from "@/app/_components/ClarityAnalytics";
import Script from "next/script";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "Hard Water Solved",
    description:
        process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
        "Plain-English, research-backed guides on hard water, water softeners, and whole-house water treatment.",
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
            <head>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
                </Script>
                <ClarityAnalytics projectId={ENABLE_ANALYTICS ? CLARITY_ID : undefined} />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
