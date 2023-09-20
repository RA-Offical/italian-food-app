import React from "react";
import { Container, MenuCard, SectionHeader } from "..";
import { menuCardsData } from "../../data/menuCardsData";

const Menu = () => {
	return (
		<section className="">
			<Container classes={"py-24"}>
				{/* header for menu */}
				<SectionHeader
					title={"Our Menu"}
					description={"Popular Karahis"}
				/>

				{/* flex box for menu cards */}
				<div className="py-3 mt-10 flex flex-wrap justify-center items-center gap-4">
					{menuCardsData.map(
						({ id, title, description, image, isLiked }) => {
							return (
								<MenuCard
									key={id}
									title={title}
									description={description}
									image={image}
									classes={
										"flex-auto basis-[18.5rem] max-w-[22rem]"
									}
									isLiked={isLiked}
								/>
							);
						}
					)}
				</div>
			</Container>
		</section>
	);
};

export default Menu;
