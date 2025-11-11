import { motion } from "framer-motion";

export const AnimateText = ({ text }: { text: string }) => {
	const letters = text.split("");

	return (
		<div className="overflow-hidden inline-block">
			{letters.map((char, i) => (
				<motion.span
					key={i}
					initial={{ x: "500px", opacity: 0 }}
					animate={{ x: "0%", opacity: 1 }}
					transition={{
						delay: i * 0.1,
						duration: 0.5,
						ease: "easeOut",
						opacity: { duration: 0.3, ease: "easeIn" },
					}}
					className="inline-block"
				>
					{char === " " ? "\u00A0" : char}
				</motion.span>
			))}
		</div>
	);
};
