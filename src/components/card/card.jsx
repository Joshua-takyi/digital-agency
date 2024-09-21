import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AzeretMonoBold } from "../font/AzeretMono";

const PrimaryCard = ({
	className,
	alt,
	image,
	title,
	link,
	firstTitle,
	secondTitle,
}) => {
	return (
		<div
			className={`${className} bg-white rounded-2xl p-4 border border-b-4 lg:w-[370px] lg:h-[230px] md:w-[300px] md:h-[200px] h-[200px] w-full flex flex-row md:justify-between `}
		>
			<div className="w-1/2 flex flex-col justify-between md:p-4 p-2 md:gap-10 gap-5">
				<h4 className={`${AzeretMonoBold.className} w-fit  p-2 md:text-xl`}>
					<span className="bg-yellow-400">{firstTitle}</span>
					<br />
					<span className="bg-yellow-400">{secondTitle}</span>
				</h4>

				<Link href={link} className="text-sm mt-auto">
					<div className="flex flex-row gap-2 items-center justify-start">
						<p className="text-nowrap font-medium">Learn More</p>
						<ArrowRightIcon className="w-4 h-4" />
					</div>
				</Link>
			</div>
			<div className="w-1/2  items-center flex">
				<Image
					src={image}
					alt={alt}
					width={300}
					height={300}
					className="object-contain lg:w-full lg:h-full "
				/>
			</div>
		</div>
	);
};

const SecondaryCard = ({
	className,
	alt,
	image,
	firstTitle,
	secondTitle,
	link,
}) => {
	return (
		<div
			className={`${className} rounded-2xl p-4 border  bg-black border-black lg:w-[370px] lg:h-[230px] md:w-[300px] md:h-[200px] h-[200px] w-full flex flex-row justify-between`}
		>
			<div className="w-1/2 flex flex-col justify-between md:p-4 p-2 md:gap-10 gap-5">
				<h4 className={`${AzeretMonoBold.className} w-fit  p-2 md:text-xl`}>
					<span className="bg-white text-black">{firstTitle}</span>
					<br />
					<span className="bg-white text-black">{secondTitle}</span>
				</h4>

				<Link href={link} className="text-sm mt-auto">
					<div className="flex flex-row gap-2 items-center justify-start">
						<p className="text-nowrap font-medium text-white">Learn More</p>
						<ArrowRightIcon className="w-4 h-4 text-white" />
					</div>
				</Link>
			</div>
			<div className="w-1/2  items-center flex">
				<Image
					src={image}
					alt={alt}
					width={300}
					height={300}
					className="object-contain lg:w-full lg:h-full "
				/>
			</div>
		</div>
	);
};

export { PrimaryCard, SecondaryCard };
