import { PiMagnifyingGlassBold } from "../../assets/icons";

const SearchForm = ({ classes }) => {
	return (
		<form className={`${classes}`}>
			<div className="border-2 border-red flex items-center h-12 rounded-md px-1.5">
				<input
					type="text"
					placeholder="Search ..."
					className="grow h-full pl-1 pr-2 focus:outline-none"
				/>
				<button className="w-9 h-9 bg-red rounded-md flex items-center justify-center">
					<PiMagnifyingGlassBold className="text-2xl fill-white" />
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
