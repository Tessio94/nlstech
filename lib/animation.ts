import { easeIn, stagger } from "motion/react";

export const cardContainer = {
	visible: {
		transition: {
			delayChildren: stagger(0.3),
		},
	},
};

export const cardVariants = {
	hidden: { opacity: 0, y: 100 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, easingIn: easeIn },
	},
};
