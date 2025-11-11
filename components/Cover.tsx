"use client";

import React from "react";
import Image from "next/image";
import laser from "@/assets/landing-desktop.jpg";
import * as motion from "motion/react-client";
import { FaArrowDown } from "react-icons/fa";
import { AnimateText } from "./AnimateText";

const Cover = () => {
	return (
		<section className="lg:bg-none bg-[url('/landing-mobile.jpg')] bg-no-repeat bg-cover h-screen lg:h-auto">
			<Image
				className="z-0 lg:h-auto lg:object-contain hidden lg:block"
				src={laser}
				alt="Rad laserskim čistaćem"
				width={1920}
				height={1080}
			/>
			<div className="xsm:gap-4 xsm:p-5 absolute z-0 flex  flex-col items-center  rounded-2xl p-6  gap-8 top-[50%] left-[50%] translate-y-[-50%] lg:translate-y-[-80%] translate-x-[-50%]  xl:translate-y-[-50%] w-[95%] lg:w-[80%]">
				<h1 className="text-white text-5xl sm:text-6xl font-extrabold tracking-widest uppercase xl:text-7xl font-mont text-center">
					<AnimateText text="NLS Tech" />
				</h1>
				<motion.p
					className="font-inter text-2xl text-white xl:text-3xl text-center"
					initial={{ x: -200, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: { duration: 0.5 },
					}}
				>
					Lasersko čišćenje tvrdih površina predstavlja modernu, neinvazivnu
					metodu uklanjanja nečistoća, oksidacije, boje ili korozije pomoću
					usmjerenog laserskog snopa.
				</motion.p>
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.5 },
					}}
				>
					<a
						href="#info"
						className="bg-theme1/50 group xsm:py-2 flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-transparent px-5 py-1 text-2xl text-white transition-border duration-200 hover:border-white focus:border-white active:border-white lg:duration-500 xl:text-3xl font-mont transform-gpu will-change-[transform,opacity] text-center"
					>
						Više informacija{" "}
						<FaArrowDown className="transition-all duration-200 group-hover:translate-y-1 group-focus:translate-y-1 group-active:translate-y-1 lg:duration-500" />
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default Cover;
