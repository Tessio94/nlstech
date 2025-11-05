import React from "react";

const Video = () => {
	return (
		<div className="bg-gray-500/80 px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-26 pb-16">
			<h5 className="text-2xl font-mont font-semibold text-white mb-12">
				Pogledajte online primjere laserskog čišćenja:
			</h5>
			<div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-16 xl:gap-10">
				<div className="aspect-video rounded-4xl overflow-hidden">
					<iframe
						className="w-full h-full"
						src="https://www.youtube-nocookie.com/embed/CASH3j4N_Lw?autoplay=0&mute=1&loop=1&playlist=CASH3j4N_Lw&controls=0&modestbranding=1&rel=0&playsinline=1"
						title="YouTube video"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
						loading="lazy"
					/>
				</div>
				<div className="aspect-video rounded-4xl overflow-hidden">
					<iframe
						className="w-full h-full"
						src="https://www.youtube-nocookie.com/embed/LSiAB5_scrg?autoplay=0&mute=1&loop=1&playlist=LSiAB5_scrg&controls=0&modestbranding=1&rel=0&playsinline=1"
						title="YouTube video"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
						loading="lazy"
					/>
				</div>
				<div className="aspect-video rounded-4xl overflow-hidden">
					<iframe
						className="w-full h-full"
						src="https://www.youtube-nocookie.com/embed/0x_EvrF_sVc?autoplay=0&mute=1&loop=1&playlist=0x_EvrF_sVc&controls=0&modestbranding=1&rel=0&playsinline=1"
						title="YouTube video"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
						loading="lazy"
					/>
				</div>
				<div className="aspect-video rounded-4xl overflow-hidden">
					<iframe
						className="w-full h-full"
						src="https://www.youtube-nocookie.com/embed/jHLLXgkn5n0?autoplay=0&mute=1&loop=1&playlist=jHLLXgkn5n0&controls=0&modestbranding=1&rel=0&playsinline=1"
						title="YouTube video"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default Video;
