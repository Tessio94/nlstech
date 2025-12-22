import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserratCover = localFont({
	src: [
		{ path: "fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
		{ path: "fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
		{ path: "fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
	],
	variable: "--mont-cover",
	preload: true,
});

const montserratRest = localFont({
	src: [
		{
			path: "fonts/Montserrat-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "fonts/Montserrat-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--mont-rest",
	preload: false,
});

const interRegular = localFont({
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
	],
	variable: "--inter-regular",
	preload: true,
});

const interRest = localFont({
	src: [
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
	variable: "--inter-rest",
	preload: false,
});

export const metadata: Metadata = {
	title: "NLS Tech | Lasersko čišćenje Zadar",
	description:
		"NLS Tech nudi profesionalno lasersko čišćenje u Zadru – sigurno, učinkovito i bez oštećenja. Vraćamo izvornu čistoću kamena, metala, betona i drugih površina.",
	icons: {
		icon: "/icon.png",
	},
	openGraph: {
		title: "NLS Tech | Lasersko čišćenje Zadar",
		description:
			"Profesionalno lasersko čišćenje tvrdih površina u Zadru – precizno, učinkovito i bez oštećenja materijala. Idealno za kamen, metal, beton i druge površine.",
		url: "https://www.nlstech.pro/",
		images: [
			{
				url: "https://www.nlstech.pro/landing-desktop.jpg",
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
			<body
				className={`
                  ${interRegular.variable}
                  ${interRest.variable}
                  ${montserratCover.className}
                  ${montserratCover.variable}
                  ${montserratRest.variable}
                  antialiased
                `}
			>
				{children}
			</body>
		</html>
	);
}
