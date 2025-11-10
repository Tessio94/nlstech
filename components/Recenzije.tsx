"use client";

import { useMediaQuery } from "usehooks-ts";
import { motion } from "motion/react";
import { cardContainer, cardVariants } from "@/lib/animation";
import { BiSolidStar } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";

const inViewProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true, amount: 0.3 },
};

const Recenzije = () => {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<section className="px-6 sm:px-10 lg:px-18  2xl:px-28 py-26">
			<h2 className="relative text-4xl font-mont font-bold mb-18 text-heading1 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-theme1 after:top-full after:left-0 after:rounded-xl">
				Recenzije naših klijenata:
			</h2>
			<motion.div
				className="grid md:grid-cols-2 grid-cols-1 gap-12"
				{...(matches ? inViewProps : {})}
				variants={matches ? cardContainer : undefined}
			>
				<motion.div
					className="relative"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<GiCheckMark className="text-7xl z-0 absolute -top-9 -left-4 text-green-700" />
					<div className="relative flex flex-col gap-6 bg-linear-to-tr from-theme1/30 to-theme1/5 border border-theme1/50 p-8 rounded-4xl shadow-xl z-100 shadow-theme1/30">
						<p className="text-xl font-inter text-text1">
							Prezadovoljna sam uslugom, komunikacijom i cjelokupnim timom
							IDEALIS-a. Suradnju nastavljamo i dalje svakako. Poštuju sve želje
							klijenata, a daju korisne savjete. Hvala vam za sve!
						</p>
						<div className="flex flex-row justify-between">
							<div>
								<p className="text-lg text-text2">Šime K. @Futuro</p>
							</div>
							<div className="flex flex-row items-center">
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="relative"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<GiCheckMark className="text-7xl z-0 absolute -top-9 -left-4 text-green-700" />
					<div className="relative flex flex-col gap-6 bg-linear-to-tr from-theme1/30 to-theme1/5 border border-theme1/50 p-8 rounded-4xl shadow-xl z-100 shadow-theme1/30">
						<p className="text-xl font-inter text-text1">
							Prezadovoljna sam uslugom, komunikacijom i cjelokupnim timom
							IDEALIS-a. Suradnju nastavljamo i dalje svakako. Poštuju sve želje
							klijenata, a daju korisne savjete. Hvala vam za sve!
						</p>
						<div className="flex flex-row justify-between">
							<div>
								<p className="text-lg text-text2">Šime K. @Futuro</p>
							</div>
							<div className="flex flex-row items-center">
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="relative"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<GiCheckMark className="text-7xl z-0 absolute -top-9 -left-4 text-green-700" />
					<div className="relative flex flex-col gap-6 bg-linear-to-tr from-theme1/30 to-theme1/5 border border-theme1/50 p-8 rounded-4xl shadow-xl z-100 shadow-theme1/30">
						<p className="text-xl font-inter text-text1">
							Prezadovoljna sam uslugom, komunikacijom i cjelokupnim timom
							IDEALIS-a. Suradnju nastavljamo i dalje svakako. Poštuju sve želje
							klijenata, a daju korisne savjete. Hvala vam za sve!
						</p>
						<div className="flex flex-row justify-between">
							<div>
								<p className="text-lg text-text2">Šime K. @Futuro</p>
							</div>
							<div className="flex flex-row items-center">
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="relative"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<GiCheckMark className="text-7xl z-0 absolute -top-9 -left-4 text-green-700" />
					<div className="relative flex flex-col gap-6 bg-linear-to-tr from-theme1/30 to-theme1/5 border border-theme1/50 p-8 rounded-4xl shadow-xl z-100 shadow-theme1/30">
						<p className="text-xl font-inter text-text1">
							Prezadovoljna sam uslugom, komunikacijom i cjelokupnim timom
							IDEALIS-a. Suradnju nastavljamo i dalje svakako. Poštuju sve želje
							klijenata, a daju korisne savjete. Hvala vam za sve!
						</p>
						<div className="flex flex-row justify-between">
							<div>
								<p className="text-lg text-text2">Šime K. @Futuro</p>
							</div>
							<div className="flex flex-row items-center">
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
								<BiSolidStar className="text-yellow-400" />
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Recenzije;
