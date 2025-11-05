"use client";

import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
	IoLocationSharp,
	IoLogoInstagram,
	IoMail,
	IoPhoneLandscape,
	IoPhonePortrait,
	IoPhonePortraitSharp,
} from "react-icons/io5";

const Kontakt = () => {
	const [success, setSuccess] = useState(false);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const onFormSubmitted = () => {};

	return (
		<section
			id="contact"
			className="px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16"
		>
			<h3 className="text-color1 mb-28 text-5xl tracking-wide font-mont">
				Kontakt
			</h3>
			<div className="flex flex-col gap-22 xl:gap-0 xl:flex-row justify-between">
				<div className="flex flex-col items-start justify-center">
					<div className="flex flex-row gap-5 items-center pb-8 w-full">
						<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center">
							<IoLocationSharp /> Lokacija
						</p>
						<p className="font-2xl font-inter font-medium text-2xl">
							23000, Zadar, Hrvatska
						</p>
					</div>
					<div className="flex flex-row gap-5 items-center py-8 w-full border-y-2 border-black">
						<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center">
							<IoMail /> Email
						</p>
						<a
							href="mailto:info@nlstech.pro"
							className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter text-2xl font-medium"
						>
							info@nlstech.pro
						</a>
					</div>
					<div className="flex flex-row gap-5 items-center py-8 w-full border-b-2 border-black">
						<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center">
							<IoPhonePortraitSharp /> Mobitel
						</p>
						<a
							href="tel:+385 99 312 4867"
							className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter text-2xl font-medium"
						>
							+385 99 312 4867
						</a>
					</div>
					<div className="flex flex-row gap-5 items-center py-8 w-full border-b-2 border-black">
						<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center">
							<IoLogoInstagram /> Instagram
						</p>
					</div>
				</div>

				<div className=" bg-gray-400/30 p-10 rounded-4xl">
					<form
						className="flex w-full flex-col gap-7"
						onSubmit={onFormSubmitted}
					>
						<div className="flex w-full items-center gap-4">
							<div className="flex basis-1/2 flex-col items-start">
								<label htmlFor="name" className="pl-3 font-inter pb-1">
									Ime
								</label>
								<input
									className="bg-white w-full rounded-xl px-3 py-2"
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="flex basis-1/2 flex-col items-start">
								<label htmlFor="lastname" className="pl-3 font-inter pb-1">
									Last name
								</label>
								<input
									className="bg-white w-full rounded-xl px-3 py-2"
									type="text"
									id="lastname"
									name="lastname"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<label htmlFor="phone" className="pl-3 font-inter pb-1">
								Broj mobitela
							</label>
							<input
								className="bg-white w-full rounded-xl px-3 py-2"
								type="tel"
								id="phone"
								name="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col items-start">
							<label htmlFor="email" className="pl-3 font-inter pb-1">
								Email
							</label>
							<input
								className="bg-white w-full rounded-xl px-3 py-2"
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col items-start">
							<label htmlFor="message" className="pl-3 font-inter pb-1">
								Poruka
							</label>
							<textarea
								className="bg-white w-full rounded-xl px-3 py-2"
								id="message"
								name="message"
								rows={4}
								cols={50}
								placeholder="Napišite vaš zahtjev ovdje..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							></textarea>
						</div>
						<button
							className="bg-gray-800 text-white font-bold text-2xl inline-block hover:border-gray-800 hover:bg-gray-400 active:bg-gray-400  focus:bg-gray-400 hover:text-gray-800 focus:text-gray-800 active:text-gray-800 cursor-pointer rounded-xl border-2 border-transparent py-4 px-20 transition-all duration-500 hover:shadow-lg focus:shadow-lg active:shadow-lg w-fit mx-auto"
							type="submit"
						>
							Pošalji
						</button>
					</form>
				</div>
			</div>
			<div className="w-full mt-16">
				<iframe
					title="NLS Tech location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91630.3097546177!2d15.166527858103125!3d44.13602363744234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa62d2c0b88f%3A0x12323e1c13f40784!2sZadar!5e0!3m2!1shr!2shr!4v1762330981409!5m2!1shr!2shr"
					width="600"
					height="450"
					// style="border:0;"
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full"
				></iframe>
			</div>
		</section>
	);
};

export default Kontakt;
