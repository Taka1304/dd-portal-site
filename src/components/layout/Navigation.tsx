import { Flex, Motion, Text } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

const List = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "News",
		href: "/news",
	},
	{
		title: "About",
		href: "/about",
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
			<Flex gapX={6} mr={6}>
				{List.map((item) => (
					<Motion initial="initial" whileHover="animate">
						<Link href={item.href} key={item.title}>
							<Text fontSize={"xl"} color={"white"}>
								{item.title}
							</Text>
							<Motion
								background="white"
								h="1px"
								variants={underlineAnimation}
							/>
						</Link>
					</Motion>
				))}
			</Flex>
		</>
	);
};

export default Navigation;
