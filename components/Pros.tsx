import React from "react";
import Image from "next/image";
import damage from "@/assets/ikone/damage.svg";
import quick from "@/assets/ikone/quick.svg";
import cheap from "@/assets/ikone/cheap.svg";
import eco from "@/assets/ikone/eco.svg";

const Pros = () => {
	return (
		<section className="px-6 sm:px-10 lg:px-18  2xl:px-28 py-26 ">
			<h2 className="text-4xl font-mont font-bold mb-12">
				Probajte i uvjerite se i sami
			</h2>
			<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10">
				<div className="flex flex-col gap-8 p-4 sm:p-8 xxl:p-10 bg-gray-400/30 rounded-4xl text-black hover:bg-gray-400/60 transition-all duration-500 shadow-lg hover:shadow-xl">
					<Image src={damage} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont">
							Bez oštećenja materijala
						</h3>
						<p className="font-inter text-xl">
							Laser uklanja samo površinske nečistoće i ne oštećuje osnovu čak
							ni kod delikatnih površina.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-8 p-5 sm:p-8 xxl:p-10 bg-gray-400/30 rounded-4xl text-black hover:bg-gray-400/60 transition-all duration-500 shadow-lg hover:shadow-xl">
					<Image src={quick} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont">Precizno i brzo</h3>
						<p className="font-inter text-xl">
							Izvrsno za teško dostupna mjesta i precizna čišćenja uz znatno
							brži rad od klasičnih metoda.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-8 p-5 sm:p-8 xxl:p-10 bg-gray-400/30 rounded-4xl text-black hover:bg-gray-400/60 transition-all duration-500 shadow-lg hover:shadow-xl">
					<Image src={cheap} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont">Isplativo</h3>
						<p className="font-inter text-xl">
							Proces čišćenja je brz i precizan te ne zahtijeva korištenje
							dodatnih kemikalija ili abraziva.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-8 p-5 sm:p-8 xxl:p-10 bg-gray-400/30 rounded-4xl text-black hover:bg-gray-400/60 transition-all duration-500 shadow-lg hover:shadow-xl">
					<Image src={eco} alt="" width={50} height={50} />
					<div className="flex flex-col gap-1 items-start">
						<h3 className="text-2xl font-bold font-mont">
							Ekološki i bez kemikalija
						</h3>
						<p className="font-inter text-xl">
							Ne koristi abrazive ni kemikalije — nema opasnog otpada, nema
							potrošnog materijala.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pros;
