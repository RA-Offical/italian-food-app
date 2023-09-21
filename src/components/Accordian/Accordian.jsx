import { useState } from "react";
import { FaChevronDown } from "../../assets/icons";

const Accordian = ({ clases, title, menus }) => {
	const [isAccordianOpen, setIsAccordianOpen] = useState(false);

	return (
		<div className={`${clases}`}>
			<header className="flex justify-between items-center py-1">
				<h2 className="font-medium text-dark text-xl">{title}</h2>
				<button
					className="text-red lg:hidden mr-[10%]"
					onClick={(e) => {
						setIsAccordianOpen(!isAccordianOpen);
					}}
				>
					<FaChevronDown
						className={`transition-transform ${
							isAccordianOpen ? "rotate-180" : ""
						}`}
					/>
				</button>
			</header>
			<div
				className={`grid transition-[grid-template-rows] duration-500 ${
					isAccordianOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				} lg:grid-rows-[1fr]`}
			>
				<ul className="overflow-hidden">
					{menus.map(({ id, linkTitle }) => {
						return (
							<li key={id}>
								<a
									href="#"
									className="py-2 inline-block hover:text-red transition-[color] duration-300"
								>
									{linkTitle}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Accordian;
