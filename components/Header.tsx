import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMail, CiMobile3 } from "react-icons/ci";

const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-5 bg-gray-400/30">
			<Link href="/">
				<Image
					className=""
					src="/next.svg"
					alt="NLS Tech logo"
					width={160}
					height={59}
				/>
			</Link>

			<nav className="hidden lg:block">
				<ul className="flex items-center lg:gap-8 xl:gap-20">
					<li>
						<a
							href="#"
							className="text-black relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-black after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-black before:transition-all before:duration-300"
						>
							Naslovnica
						</a>
					</li>
					<li>
						<Link
							href="/o-nama"
							className="text-black relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-black after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-black before:transition-all before:duration-300"
						>
							O nama
						</Link>
					</li>
					<li>
						<Link
							href="#location"
							className="text-black relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-black after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-black before:transition-all before:duration-300"
						>
							Galerija
						</Link>
					</li>
					<li>
						<Link
							href="#contact"
							className="text-black relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-black after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-black before:transition-all before:duration-300"
						>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>

			<div className="hidden flex-col  lg:flex gap-2">
				<a
					href="tel:+095 876 1857"
					className="text-black flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-[15px]"
				>
					<CiMobile3 className="text-black text-2xl ml-[-3px]" />
					<span className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						095 876 1857
					</span>
				</a>

				<a
					href="mailto:info@nlstech.pro"
					className="text-black flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-3"
				>
					<CiMail className="text-black text-2xl" />
					<span className="after:bg-black inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						info@nlstech.pro
					</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
