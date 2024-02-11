import React from "react";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<header className="h-12 flex items-center justify-between p-4 fixed w-screen">
			<h1 className="text-2xl font-bold">Data Dreamers</h1>
			<Navigation />
		</header>
	);
};

export default Header;
