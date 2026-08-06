import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import React from "react";

type PageShellProps = {
    children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
