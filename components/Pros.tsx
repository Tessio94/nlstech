"use client";

import { useMediaQuery } from "usehooks-ts";
import { motion } from "motion/react";
import Image from "next/image";
import { cardContainer, cardVariants } from "@/lib/animation";
import damage from "@/assets/ikone/damage.svg";
import quick from "@/assets/ikone/quick.svg";
import cheap from "@/assets/ikone/cheap.svg";
import eco from "@/assets/ikone/eco.svg";

const inViewProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true, amount: 0.3 },
};

const Pros = () => {
	const matches = useMediaQuery("(min-width: 640px)");

	return (
		<section className="px-6 sm:px-10 lg:px-18  2xl:px-28 py-26" id="info">
			<h2 className="relative text-4xl font-mont font-bold mb-12 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-theme1 after:top-full after:left-0 after:rounded-xl text-heading1">
				Probajte i uvjerite se i sami
			</h2>
			<motion.div
				className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10"
				{...(matches ? inViewProps : {})}
				variants={matches ? cardContainer : undefined}
			>
				<motion.div
					className="flex flex-col gap-8 p-4 sm:p-8 xxl:p-10 bg-linear-to-t from-theme1/30 to-theme1/5 rounded-4xl hover:bg-linear-to-t hover:from-theme1/50 hover:to-theme1/10 transition-colors  duration-500 shadow-lg shadow-theme1/30"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<Image src={damage} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont text-heading1">
							Bez oštećenja materijala
						</h3>
						<p className="font-inter text-xl text-text1">
							Laser uklanja samo površinske nečistoće i ne oštećuje osnovu čak
							ni kod delikatnih površina.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="flex flex-col gap-8 p-4 sm:p-8 xxl:p-10 bg-linear-to-t from-theme1/30 to-theme1/5 rounded-4xl hover:bg-linear-to-t hover:from-theme1/50 hover:to-theme1/10 transition-colors  duration-500 shadow-lg shadow-theme1/30"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<Image src={quick} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont text-heading1">
							Precizno i brzo
						</h3>
						<p className="font-inter text-xl text-text1">
							Izvrsno za teško dostupna mjesta i precizna čišćenja uz znatno
							brži rad od klasičnih metoda.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="flex flex-col gap-8 p-4 sm:p-8 xxl:p-10 bg-linear-to-t from-theme1/30 to-theme1/5 rounded-4xl hover:bg-linear-to-t hover:from-theme1/50 hover:to-theme1/10 transition-colors  duration-500 shadow-lg shadow-theme1/30"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<Image src={cheap} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont text-heading1">
							Isplativo
						</h3>
						<p className="font-inter text-xl text-text1">
							Proces čišćenja je brz i precizan te ne zahtijeva korištenje
							dodatnih kemikalija ili abraziva.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="flex flex-col gap-8 p-4 sm:p-8 xxl:p-10 bg-linear-to-t from-theme1/30 to-theme1/5 rounded-4xl hover:bg-linear-to-t hover:from-theme1/50 hover:to-theme1/10 transition-colors  duration-500 shadow-lg shadow-theme1/30"
					{...(matches ? {} : inViewProps)}
					variants={cardVariants}
				>
					<Image src={eco} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont text-heading1">
							Ekološki i bez kemikalija
						</h3>
						<p className="font-inter text-xl text-text1">
							Ne koristi abrazive ni kemikalije — nema opasnog otpada, nema
							potrošnog materijala.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Pros;
