import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
	src: [
		{
			path: "fonts/Montserrat-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "fonts/Montserrat-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "fonts/Montserrat-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "fonts/Montserrat-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "fonts/Montserrat-Extrabold.ttf",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--mont",
});

const inter = localFont({
	src: [
		{
			path: "fonts/Inter_18pt-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "fonts/Inter_18pt-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "fonts/Inter_18pt-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "fonts/Inter_18pt-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "fonts/Inter_18pt-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "fonts/Inter_18pt-SemiBoldItalic.ttf",
			weight: "800",
			style: "italic",
		},
		{
			path: "fonts/Inter_18pt-BoldItalic.ttf",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--inter",
});

export const metadata: Metadata = {
	title: "NLS Tech • Zadar",
	description:
		"Profesionalno lasersko čišćenje tvrdih površina u Zadru – precizno, učinkovito i bez oštećenja materijala. Idealno za kamen, metal, beton i druge površine.",
	icons: {
		icon: "/logo-favicon.svg",
	},
	openGraph: {
		title: "NLS Tech • Zadar",
		description:
			"Profesionalno lasersko čišćenje tvrdih površina u Zadru – precizno, učinkovito i bez oštećenja materijala. Idealno za kamen, metal, beton i druge površine.",
		url: "https://lito-adventure.com",
		images: [
			{
				url: "https://lito-adventure.com/cover2.jpg",
				width: 1920,
				height: 1080,
				alt: "Grad Zadar",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="hr">
			<body className={`${montserrat.className} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
