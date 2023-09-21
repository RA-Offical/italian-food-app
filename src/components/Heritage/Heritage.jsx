import { Container, SectionHeader } from "../";
import { leave_1 } from "../../assets/images";
import leave_3 from "../../assets/images/leave_1.png";

const Heritage = () => {
	return (
		<section className="bg-red-100  relative z-[1]">
			<Container classes={"py-24 relative "}>
				{/* leave image which is absolute */}
				<img
					src={leave_3}
					alt="leave"
					className="hidden md:block absolute bottom-0 left-0 -z-[2]"
					draggable={false}
				/>

				{/* Header for heritage section */}
				<SectionHeader
					title={"Why Us"}
					description={"Traditional Way of Cooking"}
				/>

				{/* content for heritage section */}
				<div className="py-3 mt-10">
					<p className="text-center md:max-w-prose md:mx-auto  before:content-[open-quote] before:text-2xl before:mr-1 after:content-[close-quote] after:text-2xl after:ml-1">
						The tradition of karahi cooking in Peshawar is steeped
						in history, where skilled chefs slow-cook tender meat
						and aromatic spices in a wok-like pan. This time-honored
						method infuses every dish with rich flavors, embodying
						the essence of Peshawar's culinary heritage. Karahi
						isn't just a meal; it's a celebration of tradition,
						bringing families and communities together over savory,
						time-tested recipes.
					</p>
				</div>
			</Container>
		</section>
	);
};

export default Heritage;
