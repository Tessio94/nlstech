import React from "react";
import { GiCheckMark } from "react-icons/gi";
import laser1 from "@/assets/laser1.jpg";
import Image from "next/image";

const Articles = () => {
	return (
		<section className="flex flex-col gap-30 lg:gap-46 xl:gap-52 px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-46 pb-16">
			<div className="flex flex-col lg:flex-row lg:gap-0 gap-16 justify-between">
				<div className="w-full lg:max-w-[48%] grow">
					<div className="max-w-full flex flex-row  gap-6">
						<Image
							src={laser1}
							alt="Lasersko čišćenje"
							className="rounded-4xl xl:-mt-10 w-full h-auto"
							width={450}
							height={680}
						/>
						<Image
							src={laser1}
							alt="Lasersko čišćenje"
							className="rounded-4xl xl:-mb-10 w-full h-auto xl:block lg:hidden sm:block hidden"
							width={450}
							height={680}
						/>
					</div>
				</div>
				<div className="xl:mt-10 w-full lg:max-w-[48%]">
					<h3 className="text-4xl font-mont font-bold mb-12">
						Fokus na tehnologiju i sigurnost
					</h3>
					<p className="text-2xl text-inter mb-12">
						Lasersko čišćenje koristi visoko kontroliranu snagu svjetlosti kako
						bi uklonilo slojeve nečistoća bez kontakta s površinom.
					</p>
					<div className="">
						<p className="mb-12 text-3xl font-semibold text-mont">
							Što ga čini sigurnijim od ostalih vrsta čišćenja?
						</p>
						<ul className="list-none flex flex-col gap-8">
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>Nema abrazivnog kontakta ni mehaničkog pritiska</span>
							</li>
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>
									Ugrađeni sigurnosni sustavi i precizna kontrola snopa
								</span>
							</li>
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>Smanjen rizik oštećenja osjetljivih površina</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row lg:gap-0 gap-16 justify-between ">
				<div className="xl:mt-10 w-full lg:max-w-[48%] order-2 lg:order-1">
					<h3 className="text-4xl font-mont font-bold mb-12">
						Fleksibilnost primjene
					</h3>
					<p className="text-2xl text-inter mb-12">
						Zahvaljujući svojoj preciznosti i mogućnosti prilagodbe, lasersko
						čišćenje koristi se u širokom spektru industrijskih i
						restauratorskih projekata — od pripreme površina do detaljnog
						čišćenja povijesnih artefakata.
					</p>
					<div className="">
						<p className="mb-12 text-3xl font-semibold text-mont">
							Gdje se sve koristi lasersko čišćenje?
						</p>
						<ul className="list-none flex flex-col gap-8">
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>
									Primjena u auto, brodogradnji, zrakoplovstvu i industriji
									alata
								</span>
							</li>
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>
									Pogodno za restauraciju umjetnina i kamenih površina
								</span>
							</li>
							<li className="flex flex-row gap-3 text-2xl text-inter">
								<GiCheckMark />
								<span>
									Učinkovito na metalu, betonu, kamenu i drugim materijalima
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full lg:max-w-[48%] grow lg:order-2 order-1">
					<div className="max-w-full flex flex-row  gap-6">
						<Image
							src={laser1}
							alt="Lasersko čišćenje"
							className="rounded-4xl xl:-mb-10 w-full h-auto"
							width={450}
							height={680}
						/>
						<Image
							src={laser1}
							alt="Lasersko čišćenje"
							className="rounded-4xl xl:-mt-10 w-full h-auto xl:block lg:hidden sm:block hidden"
							width={450}
							height={680}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Articles;
