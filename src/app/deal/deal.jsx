import { PrimaryButton } from "@/components/Buttons/button";
import Image from "next/image";
import deal from "@/assets/learning.svg";
export default function Deal() {
	return (
		<section className=" flex md:flex-row flex-col justify-between p-2 md:py-10 py-5">
			<div className=" md:w-1/2 lg:p-5 w-full flex flex-col gap-5 justify-center md:text-left text-center">
				<h5 className="lg:text-[30px] text-xl font-bold">
					Let&apos;s make things happen
				</h5>

				<p className="text-sm py-2 max-w-xl ">
					Our deals are tailored to meet your business&apos;s unique needs,
					helping you stay competitive in today&apos;s market.
				</p>
				<div>
					<PrimaryButton text="Get your free proposal" size="lg" />
				</div>
			</div>
			<div>
				<Image
					src={deal}
					alt="deal"
					width={400}
					height={400}
					className=" md:block hidden"
				/>
			</div>
		</section>
	);
}
