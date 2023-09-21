import { useState } from "react";
import { FaChevronDown } from "../../assets/icons";

const Accordian = ({ clases }) => {
	const [isAccordianOpen, setIsAccordianOpen] = useState(false);

	return (
		<div className={`${clases}`}>
			<header className="flex justify-between items-center py-1">
				<h2 className="font-medium text-dark text-xl">Compnay</h2>
				<button
					className="text-red lg:hidden mr-[10%]"
					onClick={(e) => {
						setIsAccordianOpen(!isAccordianOpen);
					}}
				>
					<FaChevronDown />
				</button>
			</header>
			<div
				className={`grid transition-[grid-template-rows] duration-500 ${
					isAccordianOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				} lg:grid-rows-[1fr]`}
			>
				<ul className="overflow-hidden">
					<li>
						<a
							href="#"
							className="py-2 inline-block hover:text-red transition-[color] duration-300"
						>
							Carrier
						</a>
					</li>

					<li>
						<a
							href="#"
							className="py-2 inline-block hover:text-red transition-[color] duration-300"
						>
							About Us
						</a>
					</li>

					<li>
						<a
							href="#"
							className="py-2 inline-block hover:text-red transition-[color] duration-300"
						>
							Blog
						</a>
					</li>

					<li>
						<a
							href="#"
							className="py-2 inline-block hover:text-red transition-[color] duration-300"
						>
							Press Info
						</a>
					</li>

					<li>
						<a
							href="#"
							className="py-2 inline-block hover:text-red transition-[color] duration-300"
						>
							Features
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Accordian;
