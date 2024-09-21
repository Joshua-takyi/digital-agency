export default function Container({ children }) {
	return (
		<div className="container mx-auto lg:px-20 md:px-10 px-2 md:py-5 py-2">
			{children}
		</div>
	);
}
