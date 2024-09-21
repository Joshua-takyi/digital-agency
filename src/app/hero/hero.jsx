import Image from "next/image";
import heroImage from "@/assets/hero.png";
import { PrimaryButton } from "@/components/Buttons/button";
export default function Hero() {
	return (
		<main className="flex flex-col-reverse md:flex-row md:justify-between gap-4  p-2 md:py-10 py-5">
			<div className="flex flex-col  md:w-1/2 gap-4 md:justify-center  md:text-left text-center text-pretty ">
				<h1 className={` md:text-[20px] lg:text-[35px] text-[23px] font-bold`}>
					Navigating the digital
					<br />
					landscape with precision
					<br />
					and expertise
				</h1>
				<p className="text-sm ">
					A comprehensive guide to mastering the complexities of the online
					world, offering strategic insights and practical skills to excel in
					today&apos;s technology-driven environment.
				</p>
				<div>
					<PrimaryButton text={"Contact Us"} size="lg" />
				</div>
			</div>
			<div className="md:w-1/2 bg-yellow-400   rounded-md">
				<Image
					src={heroImage}
					alt="hero"
					width={500}
					height={500}
					className="object-contain lg:w-full lg:h-full size-[260px]"
				/>
			</div>
		</main>
	);
}
