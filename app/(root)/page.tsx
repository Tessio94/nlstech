import React from "react";
import Cover from "@/components/Cover";
import Pros from "@/components/Pros";
import Articles from "@/components/Articles";
import Recenzije from "@/components/Recenzije";
import KontaktPoziv from "@/components/KontaktPoziv";

const page = () => {
	return (
		<main>
			<Cover />
			<Pros />
			<Articles />
			<Recenzije />
			<KontaktPoziv />
		</main>
	);
};

export default page;
