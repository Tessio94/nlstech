import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMail, CiMobile3 } from "react-icons/ci";
import logo from "@/assets/logo/nls-logo.svg";

const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-5 bg-linear-to-t from-theme1/20 to-transparent">
			<Link href="/">
				<Image
					className=""
					src={logo}
					alt="NLS Tech logo"
					width={90}
					height={90}
				/>
			</Link>

			<nav className="hidden lg:block">
				<ul className="flex items-center lg:gap-8 xl:gap-20">
					<li>
						<Link
							href="/"
							className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
						>
							Naslovnica
						</Link>
					</li>
					<li>
						<Link
							href="/o-nama"
							className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
						>
							O nama
						</Link>
					</li>
					<li>
						<Link
							href="/galerija"
							className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
						>
							Galerija
						</Link>
					</li>
					<li>
						<Link
							href="/kontakt"
							className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
						>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>

			<div className="hidden flex-col  lg:flex gap-2">
				<a
					href="tel:+385 99 312 4867"
					className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-[15px]"
				>
					<CiMobile3 className="text-heading1 text-2xl ml-[-3px]" />
					<span className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						099 312 4867
					</span>
				</a>

				<a
					href="mailto:info@nlstech.pro"
					className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-3"
				>
					<CiMail className="text-heading1 text-2xl" />
					<span className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						info@nlstech.pro
					</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
