"use client";

import React, { useState } from "react";

import {
	IoLocationSharp,
	IoLogoInstagram,
	IoMail,
	IoPhonePortraitSharp,
} from "react-icons/io5";
import { Toaster, toast } from "sonner";

const KontaktForm = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const onFormSubmitted = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			setLoading(true);
			const res = await fetch("/api/send-email", {
				method: "POST",
				cache: "no-cache",
				body: JSON.stringify({
					name,
					lastName,
					phone,
					email,
					message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!res.ok) {
				if (res.status === 400) {
					const data = await res.json();
					const stringErr = data.error
						.flat()
						.map((err: string) => `• ${err}`)
						.join("<br>");
					throw new Error(stringErr);
				}

				throw new Error("Pogreška prilikom slanja zahtjeva!");
			}

			const result = await res.json();
			console.log("data", result);

			setName("");
			setLastName("");
			setPhone("");
			setEmail("");
			setMessage("");
			setSuccess(true);
			setLoading(false);
			toast.success(result.message);
		} catch (err) {
			if (err instanceof Error) {
				setSuccess(false);
				setLoading(false);
				toast.error(<div dangerouslySetInnerHTML={{ __html: err.message }} />);
			}
		}
	};

	return (
		<>
			<Toaster
				toastOptions={{
					style: {
						color: success ? "#22c55e" : "#ef4444",
						border: success ? "2px solid #22c55e" : "2px solid #ef4444",
					},
				}}
			/>

			<section
				id="contact"
				className="px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16"
			>
				<h3 className="text-heading1 relative mb-28 text-5xl tracking-wide font-mont after:content-[''] after:absolute after:w-16 after:h-1 after:bg-theme1 after:top-full after:left-0 after:rounded-xl ">
					Kontakt
				</h3>
				<div className="flex flex-col gap-22 xl:gap-0 xl:flex-row justify-between">
					<div className="flex flex-col items-start justify-center">
						<div className="flex flex-col sm:flex-row gap-5 items-center pb-8 w-full">
							<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center text-theme1">
								<IoLocationSharp className="text-theme1" /> Lokacija
							</p>
							<p className="font-2xl font-inter font-medium text-2xl">
								23000, Zadar, Hrvatska
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-5 items-center py-8 w-full border-y-2 border-black">
							<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center text-theme1">
								<IoMail className="text-theme1" /> Email
							</p>
							<a
								href="mailto:info@nlstech.pro"
								className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter text-2xl font-medium"
							>
								info@nlstech.pro
							</a>
						</div>
						<div className="flex flex-col sm:flex-row gap-5 items-center py-8 w-full border-b-2 border-black">
							<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center text-theme1">
								<IoPhonePortraitSharp className="text-theme1" /> Mobitel
							</p>
							<a
								href="tel:+385 99 312 4867"
								className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter text-2xl font-medium"
							>
								+385 99 312 4867
							</a>
						</div>
						<div className="flex flex-col sm:flex-row gap-5 items-center py-8 w-full border-b-2 border-black">
							<p className="text-3xl font-mont font-semibold flex flex-row gap-3 items-center text-theme1">
								<IoLogoInstagram className="text-theme1" /> Instagram
							</p>
						</div>
					</div>

					<div className=" bg-theme1/20 p-5 sm:p-10 rounded-2xl sm:rounded-4xl">
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
										Prezime
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
								className="bg-theme1/80 text-white font-bold text-2xl  hover:border-white hover:bg-theme1 active:bg-theme1  focus:bg-theme1  cursor-pointer rounded-xl border-2 border-transparent  transition-all duration-500 hover:shadow-lg focus:shadow-lg active:shadow-lg w-fit mx-auto flex flex-row justify-center items-center min-w-[247px] min-h-[68px]"
								type="submit"
							>
								{loading ? (
									<svg
										className="size-6 animate-spin text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								) : (
									"Pošalji"
								)}
							</button>
						</form>
					</div>
				</div>
				<div className="w-full mt-16 sm:rounded-4xl rounded-2xl overflow-hidden">
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
		</>
	);
};

export default KontaktForm;
