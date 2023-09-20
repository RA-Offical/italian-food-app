import { FaRegHeart, FaHeart } from "../../assets/icons";

const MenuCard = ({ classes, title, description, image, isLiked }) => {
	return (
		<div
			className={`group border border-red rounded-xl p-5 relative hover:bg-red-100 transition-[background-color] duration-300 ${classes}`}
		>
			<button className="absolute top-6 right-6 text-3xl text-red">
				{isLiked ? <FaHeart /> : <FaRegHeart />}
			</button>

			<img
				src={image}
				alt={title}
				className="mx-auto max-w-[12.5rem] translate-y-4 aspect-square object-contain"
			/>

			<div className="mt-10 space-y-3 text-center">
				<h3 className="font-medium text-dark group-hover:text-red transition-[color] duration-300">
					{title}
				</h3>
				<p className="line-clamp-3">{description}</p>
			</div>
		</div>
	);
};

export default MenuCard;
