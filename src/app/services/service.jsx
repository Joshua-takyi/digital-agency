// import { AzeretMonoBold } from "@/components/font/AzeretMono";
import ServicesCard from "@/components/servicesCard";
export default function Services() {
	return (
		<section className="p-2 md:py-10 py-5" id="services">
			<div className="flex md:flex-row flex-col md:gap-3 gap-4 md:items-center">
				<h2
					className={`text-2xl font-bold bg-yellow-400 md:py-2 w-fit px-4 rounded-sm`}
				>
					Services
				</h2>
				<p className="text-sm py-2 md:max-w-xl">
					Our comprehensive services are tailored to meet your business&apos;s
					unique needs, helping you stay competitive in today&apos;s market.
				</p>
			</div>
			<ServicesCard />
		</section>
	);
}
