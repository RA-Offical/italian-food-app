import { FaArrowRightLong } from "../../assets/icons";
import { Container } from "../";
import { food_4, food_5, leave_2 } from "../../assets/images";

const Hero = () => {
	return (
		<div className="h-screen bg-gradient-to-b from-red-50 to-white">
			{/* Container component which will be grid for hero comonent content */}
			<Container
				classes={
					"py-8 h-full grid lg:grid-cols-[50%,_45%] lg:gap-[5%] items-center lg:pb-0"
				}
			>
				{/* This is div container which will have content  */}
				<div className="space-y-6 text-center lg:text-left lg:max-w-prose">
					<h1 className="text-5xl font-secondary text-dark">
						Elevate Your <span className="text-red">Taste</span>{" "}
						with Peshawar's{" "}
						<span className="text-red">Signature Karahi</span>
					</h1>

					<p className="text-xl">
						You will find tradition, flavor, and warmth in every
						dish. Discover Peshawar's culinary heart with us.
					</p>

					<button className="inline-flex items-center gap-2 px-4 py-2 bg-red text-white font-medium hover:bg-red/90 active:bg-red/80 rounded-md group">
						<span>Order</span>
						<FaArrowRightLong className="text-2xl transition-transform duration-300 group-hover:translate-x-1.5" />
					</button>
				</div>

				{/* images container */}

				<div className="hidden lg:grid lg:grid-cols-[100px_100px_1fr] lg:grid-rows-[1fr_200px] lg:relative">
					<img
						src={food_4}
						alt="Mutton Karahi"
						className="col-start-2 col-span-full max-w-[350px] w-full"
					/>

					<img
						src={food_5}
						alt="Yogurt"
						className="col-start-1 col-span-2"
					/>

					<img
						src={leave_2}
						alt="leaves"
						className="absolute -bottom-8 left-1/4"
					/>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
