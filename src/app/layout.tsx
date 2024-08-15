import { SpeedInsights } from "@vercel/speed-insights/next";
import { Flex } from "@yamada-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Data Dreamers",
	description: "Data Dreamers ",
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
					<Flex
						direction={"column"}
						justify={"center"}
						minHeight={"100vh"}
						w={"full"}
					>
						<Header />
						<Flex
							as="main"
							direction="column"
							align="center"
							justify={"space-between"}
							grow={1}
							gap={4}
						>
							{children}
						</Flex>
						<Footer />
					</Flex>
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	);
}
