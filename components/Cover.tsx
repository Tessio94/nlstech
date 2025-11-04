import React from "react";
import Image from "next/image";
import laser from "@/assets/landing-desktop.jpg";
import * as motion from "motion/react-client";
import { FaArrowDown } from "react-icons/fa";

const Cover = () => {
	return (
		<section>
			<Image
				className="z-0 lg:h-auto lg:object-contain"
				src={laser}
				alt="Rad laserskim čistaćem"
				width={1920}
				height={1080}
			/>
			<div className="bg-gray-400/20 max-lg:hidden xsm:gap-4 xsm:p-5 absolute top-[45%] left-[5%] z-0 flex w-[90%] flex-col items-start gap-3 rounded-2xl p-6 backdrop-blur-md sm:left-[20%] sm:w-[60%] lg:top-[35%] lg:left-[80px] lg:w-[500px] xl:top-[35%] xl:left-[100px] xl:w-[550px] xl:gap-8 2xl:top-[40%] 2xl:w-[650px]">
				<motion.h1
					className="text-white text-4xl font-extrabold tracking-widest uppercase xl:text-5xl font-mont"
					initial={{ y: -100, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.3, delay: 0.5 },
					}}
				>
					NLS Tech
				</motion.h1>
				<motion.p
					className="font-inter text-2xl text-white xl:text-3xl"
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: { duration: 0.3, delay: 0.5 },
					}}
				>
					Lasersko čišćenje tvrdih površina predstavlja modernu, neinvazivnu
					metodu uklanjanja nečistoća, oksidacije, boje ili korozije pomoću
					usmjerenog laserskog snopa.
				</motion.p>
				<motion.a
					href="#tours"
					className="bg-gray-400/40 group xsm:py-2 flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-transparent px-5 py-1 text-2xl text-white transition-all duration-200 hover:border-white focus:border-white active:border-white lg:duration-500 xl:text-3xl font-mont"
					initial={{ y: 50, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.3, delay: 0.5 },
					}}
				>
					Više informacija{" "}
					<FaArrowDown className="transition-all duration-200 group-hover:translate-y-[4px] group-focus:translate-y-[4px] group-active:translate-y-[4px] lg:duration-500" />
				</motion.a>
			</div>
		</section>
	);
};

export default Cover;
