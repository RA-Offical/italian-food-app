import React from "react";

const SeactionHeader = ({ title, description }) => {
	return (
		<header className="text-center">
			<h2 className="text-red font-medium text-xl">{title}</h2>
			<p className="text-dark font-secondary text-4xl">{description}</p>
		</header>
	);
};

export default SeactionHeader;
