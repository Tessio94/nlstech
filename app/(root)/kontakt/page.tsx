import type { Metadata } from "next";
import KontaktForm from "@/components/KontaktForm";

export const metadata: Metadata = {
	title: "Kontakt | NLS Tech – Lasersko Čišćenje Zadar",
	description:
		"Kontaktirajte NLS Tech za profesionalno lasersko čišćenje u Zadru. Pošaljite upit ili nas nazovite za besplatnu procjenu i savjetovanje.",
	openGraph: {
		title: "Kontakt | NLS Tech – Lasersko Čišćenje Zadar",
		description:
			"Stupite u kontakt s NLS Tech timom u Zadru – stručnjaci za lasersko čišćenje površina. Pošaljite upit ili zatražite ponudu.",
		url: "https://www.nlstech.pro/kontakt",
		images: [
			{
				url: "https://www.nlstech.pro/landing-desktop.jpg",
				width: 1920,
				height: 1080,
				alt: "Kontakt NLS Tech Zadar",
			},
		],
		type: "website",
	},
};

const Kontakt = () => {
	return <KontaktForm />;
};

export default Kontakt;
