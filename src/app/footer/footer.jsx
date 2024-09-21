"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-slate-200 text-black p-2 md:py-10 py-5 "
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.3 }}
						className="mb-4 md:mb-0"
					>
						<h2 className="text-2xl font-bold">Digital Agency</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="flex space-x-4"
					></motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className="mt-8 text-center text-sm"
				>
					© {currentYear} Digital Agency. All rights reserved. <br />
					<Link
						href="tel: +2330248115326"
						className="text-yellow-500 underline"
					>
						tel: +2330248115326
					</Link>
				</motion.div>
			</div>
		</motion.footer>
	);
}
