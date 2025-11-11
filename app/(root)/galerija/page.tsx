import React from "react";
import Video from "@/components/Video";

const Galerija = () => {
	return (
		<section id="contact">
			<div className="px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16">
				<h3 className="text-heading1 relative mb-28 text-5xl tracking-wide font-mont after:content-[''] after:absolute after:w-16 after:h-1 after:bg-theme1 after:top-full after:left-0 after:rounded-xl ">
					Galerija
				</h3>

				<p className="text-4xl text-text1 font-semibold text-center">
					Slike su u pripremi...
				</p>
			</div>
			<div className="flex flex-col gap-10">
				<Video />
			</div>
		</section>
	);
};

export default Galerija;
