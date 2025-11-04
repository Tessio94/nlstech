import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const KontaktPoziv = () => {
	return (
		<section className="px-6 sm:px-10 lg:px-18  2xl:px-28 py-26 bg-gray-500/80 flex flex-row justify-between items-end gap-16">
			<div className="">
				<p className="text-4xl font-bold mb-8 text-white">Javite nam se</p>
				<p className="flex flex-row items-center gap-6 text-3xl text-white group">
					Ispunite našu kontakt formu i zatražite naše usluge{" "}
					<BsArrowRight className="xl:inline-block hidden group-hover:translate-x-3 duration-300 transition-all" />
				</p>
			</div>
			<Link
				href="/kontakt"
				className="py-4 px-10 bg-gray-800 rounded-4xl text-white font-bold text-3xl inline-block cursor-pointer hover:bg-gray-600 transition-all duration-500"
			>
				Kontakt
			</Link>
		</section>
	);
};

export default KontaktPoziv;
