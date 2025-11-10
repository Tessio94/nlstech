import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const KontaktPoziv = () => {
	return (
		<section className="px-6 sm:px-10 lg:px-18  2xl:px-28 py-26 bg-theme1/75 flex flex-col md:flex-row justify-between items-end gap-16">
			<div className="">
				<p className="text-4xl font-bold mb-8 text-white max-md:text-center">
					Javite nam se
				</p>
				<p className="flex flex-row items-center gap-6 text-3xl text-white group max-md:text-center">
					Ispunite našu kontakt formu i zatražite naše usluge{" "}
					<BsArrowRight className="xl:inline-block hidden group-hover:translate-x-3 duration-300 transition-all" />
				</p>
			</div>
			<Link
				href="/kontakt"
				className="py-4 px-10 bg-theme1 rounded-4xl text-white font-bold text-3xl inline-block border-2 border-white cursor-pointer hover:text-theme1 hover:bg-white transition-all duration-500 md:mx-0 mx-auto"
			>
				Kontakt
			</Link>
		</section>
	);
};

export default KontaktPoziv;
