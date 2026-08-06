import React from "react";
import type { Metadata } from "next";
import PageShell from "@/app/_components/PageShell";

export const metadata: Metadata = {
    title: "Irfan Nasim - Author at Hard Water Solved",
    description: "Irfan Nasim writes and edits Hard Water Solved. Read his full bio, research approach, and every guide he's published.",
};

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
    return <PageShell>{children}</PageShell>;
}
