"use client";
import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/font";
import "swiper/swiper-bundle.css";
import Nav from "../../components/Nav";
const metadata: Metadata = {
    title: "Flawless",
    description: "Generated by create next app",
};
import Footer from "../../components/pages/Footer";
import store from "../../redux/store";
import { Provider } from "react-redux";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-primaryColor  antialiased`}
            >
                <Provider store={store}>
                    <Nav />
                    {children}

                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
