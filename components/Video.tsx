import React from "react";
import { BsYoutube } from "react-icons/bs";

const videos = ["CASH3j4N_Lw", "LSiAB5_scrg", "0x_EvrF_sVc", "jHLLXgkn5n0"];

const Video = () => {
	return (
		<div className="bg-theme1/70 px-6 sm:px-10 lg:px-18 2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16">
			<h5 className="text-2xl font-mont font-semibold text-white mb-12">
				Pogledajte online primjere laserskog čišćenja:
			</h5>

			<div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-16 xl:gap-10">
				{videos.map((id) => (
					<a
						key={id}
						href={`https://www.youtube.com/watch?v=${id}`}
						target="_blank"
						rel="noopener noreferrer"
						className="relative aspect-video rounded-4xl overflow-hidden group"
					>
						{/* Thumbnail */}
						<img
							src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
							alt="YouTube thumbnail"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>

						{/* yt-icon overlay */}
						<BsYoutube className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-red-600 bg-white p-3 rounded-xl w-20 h-20 group-hover:text-white group-hover:bg-red-600 transition-all duration-300" />
					</a>
				))}
			</div>
		</div>
	);
};

export default Video;
