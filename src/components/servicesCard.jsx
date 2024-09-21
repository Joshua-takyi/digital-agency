import astro from "@/assets/visionary_technology.svg";
import programmer from "@/assets/conference.svg";
import online_programming from "@/assets/online_learning.svg";
import youtube from "@/assets/youtube_tutorial.svg";

import { PrimaryCard, SecondaryCard } from "@/components/card/card";

const serviceCards = [
	{
		id: 1,
		type: "primary",
		title: ["Web", "Development"],
		link: "/services/web-development",
		image: astro,
	},
	{
		id: 2,
		type: "secondary",
		title: ["Mobile App", "Development"],
		link: "/services/mobile-app-development",
		image: programmer,
	},
	{
		id: 3,
		type: "secondary",
		title: ["Cloud", "Solutions"],
		link: "/services/cloud-solutions",
		image: online_programming,
	},
	{
		id: 4,
		type: "primary",
		title: ["UI/UX", "Design"],
		link: "/services/ui-ux-design",
		image: youtube,
	},
];

export default function ServicesCard() {
	return (
		<div className="p-2  py-5 ">
			{/* Desktop view */}
			<div className="md:grid hidden md:grid-cols-2 gap-10 place-items-center p-2">
				{serviceCards.map((card) =>
					card.type === "primary" ? (
						<PrimaryCard
							key={card.id}
							image={card.image}
							alt={card.title.join(" ").toLowerCase()}
							firstTitle={card.title[0]}
							secondTitle={card.title[1]}
							link={card.link}
						/>
					) : (
						<SecondaryCard
							key={card.id}
							className="bg-yellow-400"
							image={card.image}
							alt={card.title.join(" ").toLowerCase()}
							firstTitle={card.title[0]}
							secondTitle={card.title[1]}
							link={card.link}
						/>
					)
				)}
			</div>

			{/* Mobile view */}
			<div className="grid grid-cols-1 md:hidden gap-7 place-items-center">
				{[...serviceCards.slice(0, 2), serviceCards[3], serviceCards[2]].map(
					(card) =>
						card.type === "primary" ? (
							<PrimaryCard
								key={card.id}
								image={card.image}
								alt={card.title.join(" ").toLowerCase()}
								firstTitle={card.title[0]}
								secondTitle={card.title[1]}
								link={card.link}
							/>
						) : (
							<SecondaryCard
								key={card.id}
								className="bg-yellow-400"
								image={card.image}
								alt={card.title.join(" ").toLowerCase()}
								firstTitle={card.title[0]}
								secondTitle={card.title[1]}
								link={card.link}
							/>
						)
				)}
			</div>
		</div>
	);
}
