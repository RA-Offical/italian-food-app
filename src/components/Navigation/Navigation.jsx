import { useState } from "react";
import { SearchForm } from "../";
import { RxCross2 } from "../../assets/icons";
import { navData } from "../../data/navData";

const Navigation = ({ isNavVisible, setIsNavVisible }) => {
	// state for checking which item is selected and then apply styles
	const [selectedItem, setSelectedItem] = useState(0);

	return (
		<div
			className={`text-center fixed inset-0 bg-white z-10 p-4 lg:static lg:grow lg:p-0 transition-transform duration-300 ${
				isNavVisible ? "translate-y-0" : "-translate-y-full"
			} lg:translate-y-0`}
		>
			<button
				className="text-3xl text-dark hover:text-red block ml-auto transition-[color] duration-300 lg:hidden"
				onClick={(e) => setIsNavVisible(false)}
			>
				<RxCross2 />
			</button>

			<ul className="mt-4 space-y-5 p-2 lg:flex lg:items-center lg:justify-center lg:space-y-0 lg:gap-4 lg:p-0 lg:mt-0">
				{navData.map(({ id, name }) => {
					return (
						<li key={id} className="lg:px-2 nav-item">
							<a
								href="#"
								className={`hover:text-red hover:font-medium transition-[color,_font-weight] duration-300 ${
									selectedItem === id
										? "text-red font-medium"
										: ""
								}`}
								onClick={() => setSelectedItem(id)}
							>
								{name}
							</a>
						</li>
					);
				})}

				<li className="mt-6">
					<SearchForm
						classes={"md:hidden max-w-[23.125rem] mx-auto"}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
