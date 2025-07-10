import { GeistSans, GeistMono } from "geist/font";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
	title: "Architecture Portfolio",
	description: "Professional architecture portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body className="font-sans antialiased bg-white text-gray-900">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
