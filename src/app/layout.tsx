import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Data Dreamers",
	description: "Data Dreamers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<Providers>
					<div className="flex flex-col min-h-screen w-screen justify-between">
						<Header />
						<main className="grow flex flex-col items-center justify-between">
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
