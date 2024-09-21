"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const MotionButton = motion.create(Button);

const PrimaryButton = ({ text,size }) => {
	return (
		<MotionButton
			// Add the variant prop here
			variant="primary"
			size={size}
			className=""
			transition={{ duration: 0.2, ease: "easeInOut" }}
			whileTap={{ scale: 0.9 }}
		>
			{text}
		</MotionButton>
	);
};

const SecondaryButton = ({ text, size }) => {
	return (
		<MotionButton
			variant="secondary"
			size={size}
			transition={{ duration: 0.2, ease: "easeInOut" }}
			whileTap={{ scale: 0.9 }}
		>
			{text}
		</MotionButton>
	);
};

export { PrimaryButton, SecondaryButton };
