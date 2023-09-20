import { Header, Heritage, Hero, Menu } from "./components";

function App() {
	return (
		<div className="min-h-screen min-w-[23.125rem] text-dark-100 text-lg">
			<Header />
			<main>
				<Hero />
				<Menu />
				<Heritage />
			</main>
		</div>
	);
}

export default App;
