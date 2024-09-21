import Hero from "./hero/hero";
import Companies from "./companies/companies";
import Services from "./services/service";
import Deal from "./deal/deal";
export default function Home() {
	return (
		<div>
			<Hero />
			<Companies />
			<Services />
			<Deal />
			
		</div>
	);
}
