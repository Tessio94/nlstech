import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollWrapper from "@/components/ScrollWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "NLS Tech",
		url: "https://nlstech.pro",
		logo: "https://nlstech.pro/nls-logo.svg",
		image: "https://nlstech.pro/landing-desktop.jpg",
	};

	const jsonLdPro = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "NLS Tech",
		url: "https://nlstech.pro",
		logo: "https://nlstech.pro/nls-logo.svg",
		image: "https://nlstech.pro/landing-desktop.jpg",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdPro).replace(/</g, "\\u003c"),
				}}
			/>
			<Header />
			<>{children}</>
			<Footer />
			<ScrollWrapper />
		</>
	);
};

export default Layout;
