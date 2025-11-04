import React from "react";
import Image from "next/image";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
	return (
		<footer className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-10 bg-gray-400/30 gap-16">
			<a href="#">
				<Image
					className=""
					src="/next.svg"
					alt="NLS Tech logo"
					width={150}
					height={243}
				/>
			</a>

			<div className="order-1 text-center lg:order-0 font-inter">
				Copyright © 2025 NLS Tech - Sva prava pridržana.
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl font-inter">
					<span className="text-color2 font-inter font-bold">Lokacija: </span>
					23000, Zadar, Hrvatska
				</p>
				<p className="text-2xl">
					<span className="text-color2 font-inter font-bold">Mail: </span>
					<a
						href="mailto:info@nlstech.pro"
						className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter"
					>
						info@nlstech.pro
					</a>
				</p>
				<p className="text-2xl">
					<span className="text-color2 font-inter font-bold">Mobitel: </span>
					<a
						href="tel:+385 99 312 4867"
						className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter"
					>
						+385 99 312 4867
					</a>
				</p>
				<div className="flex justify-start">
					<a
						href="https://www.instagram.com/nlstechnology/"
						aria-label="NLS Tech on Instagram - Footer social link"
						className="group"
					>
						<CiInstagram className="text-3xl group-hover:text-red-400 transition-all duration-300" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
