
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import React from "react";

type baseLayoutProps = {
    children?: React.ReactNode;
}

export function BaseLayout({ children }: baseLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
