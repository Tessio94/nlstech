import React from "react";
import Video from "@/components/Video";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Galerija | NLS Tech – Lasersko Čišćenje Zadar",
	description:
		"Pogledajte galeriju NLS Tech projekata laserskog čišćenja u Zadru. Usporedite rezultate prije i poslije čišćenja kamena, metala i betona.",
	openGraph: {
		title: "Galerija | NLS Tech – Lasersko Čišćenje Zadar",
		description:
			"Galerija laserskog čišćenja u Zadru – precizno, ekološki i bez oštećenja materijala. NLS Tech projekti i rezultati.",
		url: "https://www.nlstech.pro/galerija",
		images: [
			{
				url: "https://www.nlstech.pro/landing-desktop.jpg",
				width: 1920,
				height: 1080,
				alt: "Galerija laserskog čišćenja Zadar",
			},
		],
		type: "website",
	},
};

const Galerija = () => {
	return (
		<section id="contact">
			<div className="px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16">
				<h3 className="text-heading1 relative mb-28 text-5xl tracking-wide font-mont after:content-[''] after:absolute after:w-16 after:h-1 after:bg-theme1 after:top-full after:left-0 after:rounded-xl ">
					Galerija
				</h3>

				<p className="text-4xl text-text1 font-semibold text-center">
					Slike su u pripremi...
				</p>
			</div>
			<div className="flex flex-col gap-10">
				<Video />
			</div>
		</section>
	);
};

export default Galerija;
