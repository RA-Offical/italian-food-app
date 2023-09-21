import React from "react";
import { FaRegCopyright } from "../../assets/icons";

const Copyright = () => {
	const year = new Date().getFullYear();

	return (
		<div className="py-2 gap-2 text-dark text-center">
			&copy; {year} All rights reserved. Designed and Developed by{" "}
			<span className="text-red">Rashid Ameer</span>
		</div>
	);
};

export default Copyright;
