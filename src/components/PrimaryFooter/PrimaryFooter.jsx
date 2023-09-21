import React from "react";
import { Accordian, Container, Logo } from "../";
import { BiLogoFacebook, BiLogoTwitter, FiInstagram } from "../../assets/icons";

const Footer = () => {
	return (
		<footer>
			<Container
				classes={
					"pt-24 pb-10 divide-y-4 flex flex-col lg:justify-between lg:flex-row lg:gap-8 lg:divide-y-0"
				}
			>
				<div className="flex justify-between grow mt-4 pt-4 order-1 lg:order-none lg:flex-col lg:mt-0 lg:py-1">
					<Logo />

					<div className="flex gap-2 justify-self-end">
						<button className="bg-red hover:bg-red/90 transition-[background-color] duration-300 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-md">
							<BiLogoFacebook />
						</button>
						<button className="bg-red hover:bg-red/90 transition-[background-color] duration-300 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-md">
							<BiLogoTwitter />
						</button>
						<button className="bg-red hover:bg-red/90 transition-[background-color] duration-300 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-md">
							<FiInstagram />
						</button>
					</div>
				</div>

				{/* Accordian component */}
				<Accordian clases={"grow py-3 lg:py-0"} />
				{/* Accordian component */}
				<Accordian clases={"grow py-3 lg:py-0"} />
				{/* Accordian component */}
				<Accordian clases={"grow py-3 lg:py-0"} />
				{/* Accordian component */}
				<Accordian clases={"grow py-4 md:py-0"} />
			</Container>
		</footer>
	);
};

export default Footer;
