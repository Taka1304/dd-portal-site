import { Flex, Text } from "@yamada-ui/react";
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
	return (
		<>
			<Flex gapX={4} mr={4}>
				{List.map((item) => (
					<Link href={item.href} key={item.title}>
						<Text
							_hover={{
								color: "primary",
							}}
						>
							{item.title}
						</Text>
					</Link>
				))}
			</Flex>
		</>
	);
};

export default Navigation;
