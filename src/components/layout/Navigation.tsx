import { Flex, Motion, Text } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";
import SideMenu from "./SideMenu";

const List = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "News",
		href: "/news",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

const Navigation = () => {
	const underlineAnimation = {
		initial: { width: "0%" },
		animate: { width: "100%" },
	};

	return (
		<>
			<Flex gapX={6} mr={6} display={{ base: "flex", md: "none" }}>
				{List.map((item) => (
					<Motion initial="initial" whileHover="animate" key={item.title}>
						<Link href={item.href}>
							<Text
								fontSize={"lg"}
								color={"white"}
								_hover={{ bgGradient: "red", bgClip: "text" }}
							>
								{item.title}
							</Text>
							<Motion bgGradient="red" h="1px" variants={underlineAnimation} />
						</Link>
					</Motion>
				))}
			</Flex>
			<Flex display={{ base: "none", md: "flex" }}>
				<SideMenu />
			</Flex>
		</>
	);
};

export default Navigation;
