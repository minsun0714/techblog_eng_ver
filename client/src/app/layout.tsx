import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from '@/(common)/components/Header';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jasimine_tech blog',
	description: 'tech blog',
	icons: {
		icon: 'Favicon.jpg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
