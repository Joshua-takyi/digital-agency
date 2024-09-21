import Image from "next/image";
import netflixLogo from "../../assets/Netflix.svg";
import notionLogo from "../../assets/Notion.svg";
import dribbleLogo from "../../assets/dribble.svg";
import paypalLogo from "../../assets/PayPal.svg";
import siliconAppleLogo from "../../assets/apple.svg";

export default function Companies() {
	return (
		<section className="p-2 md:py-10 py-5   ">
			<div className="flex  gap-4 items-center md:justify-between ">
				{/* array was divided into two parts, first 4 and last 1 and is displayed in mobile view */}
				{CompaniesLogos.slice(0, 4).map((company) => (
					<div key={company.id}>
						<Image
							src={company.logo}
							alt={company.name}
							width={100}
							height={100}
						/>
					</div>
				))}

				<div className="hidden md:flex ">
					{CompaniesLogos.slice(4).map((company) => (
						<div key={company.id}>
							<Image
								src={company.logo}
								alt={company.name}
								width={100}
								height={100}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const CompaniesLogos = [
	{
		id: 1,
		name: "netflix",
		logo: netflixLogo,
	},
	{
		id: 2,
		name: "notion",
		logo: notionLogo,
	},
	{
		id: 3,
		name: "dribble",
		logo: dribbleLogo,
	},
	{
		id: 4,
		name: "paypal",
		logo: paypalLogo,
	},
	{
		id: 5,
		name: "apple",
		logo: siliconAppleLogo,
	},
];
