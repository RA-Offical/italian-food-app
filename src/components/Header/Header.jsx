import { useState } from "react";
import { Container, Logo, Navigation, SearchForm } from "../";
import { LuMenu } from "../../assets/icons";

const Header = () => {
	// state for showing and hiding navbar
	const [isNavVisible, setIsNavVisible] = useState(false);

	return (
		<header className="fixed left-0 right-0 top-0 z-10">
			<Container
				classes={
					"py-4 flex items-center justify-between bg-white/5 backdrop-blur"
				}
			>
				{/* Logo component */}
				<Logo />

				{/* navigation component */}
				<Navigation
					isNavVisible={isNavVisible}
					setIsNavVisible={setIsNavVisible}
				/>

				<div className="flex items-center gap-4">
					{/* Search Form component */}
					<SearchForm classes={"hidden md:block"} />

					{/* menu icon shown at small devices */}
					<button
						className="text-dark hover:text-red transition-[color] duration-300 lg:hidden backd"
						onClick={(e) => {
							setIsNavVisible(true);
						}}
					>
						<LuMenu className=" text-3xl" />
					</button>
				</div>
			</Container>
		</header>
	);
};

export default Header;
