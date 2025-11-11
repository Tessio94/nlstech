"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollWrapper = () => {
	const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 2000) {
				setShowScrollToTop(true);
			} else {
				setShowScrollToTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{showScrollToTop && (
				<div
					onClick={scrollToTop}
					className="group bg-theme1 bg-opacity-35 fixed right-2 bottom-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl p-3 hover:bg-white focus:bg-white active:bg-white transition-all duration-300 border-2 border-theme1"
				>
					<FaArrowUp className="group-hover:text-theme1 group-focus:text-theme1 group-active:text-theme1 text-5xl text-white transition-all duration-300" />
				</div>
			)}
		</>
	);
};

export default ScrollWrapper;
