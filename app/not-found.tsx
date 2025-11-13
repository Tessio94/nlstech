import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import logo from "@/assets/logo/nls-logo.svg";
import * as motion from "motion/react-client";

const NotFound = () => {
	return (
		<>
			<Header />
			<main className="min-h-[calc(100vh-687px)] lg:min-h-[calc(100vh-385px)]">
				<section className="px-3 sm:px-10 py-20 flex flex-row items-center justify-center">
					<div className="flex flex-col gap-10 justify-center items-center">
						<motion.h1
							className="flex flex-col sm:flex-row gap-5 items-center text-center sm:items-end text-3xl font-semibold"
							initial={{ y: -200, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5 },
							}}
						>
							<strong className="text-theme1 text-5xl">404</strong> Stranica
							nije pronađena!
						</motion.h1>
						<motion.div
							animate={{
								rotate: 360,
								transition: {
									duration: 1.5,
									ease: "linear",
									repeat: Infinity,
									repeatType: "loop",
								},
							}}
						>
							<Image src={logo} alt="NLS Tech logo" width={90} height={90} />
						</motion.div>

						<motion.p
							className="text-2xl text-inter text-center"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { duration: 0.5 },
							}}
						>
							Žao nam je, stranica koju ste zatražili nije pronađena
						</motion.p>
						<motion.div
							initial={{ y: 200, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5 },
							}}
						>
							<Link
								href="/"
								className="px-5 py-3 bg-theme1 rounded-4xl text-white font-inter font-semibold inline-block w-fit hover:text-theme1 hover:bg-theme1/30 transition-all duration-500"
							>
								Povratak na naslovnicu
							</Link>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default NotFound;
