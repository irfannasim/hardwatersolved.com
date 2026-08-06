import React from "react";
import PageShell from "@/app/_components/PageShell";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <PageShell>{children}</PageShell>;
}
