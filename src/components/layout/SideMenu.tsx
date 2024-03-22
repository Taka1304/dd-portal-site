"use client";

import { IconMenu2 } from "@tabler/icons-react";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	Flex,
	Motion,
	Text,
	useDisclosure,
} from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

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

const SideMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const underlineAnimation = {
		initial: { width: "0%" },
		animate: { width: "100%" },
	};
	return (
		<>
			<Button
				onClick={onOpen}
				bg={"transparent"}
				border={"revert"}
				color={"white"}
				_hover={{ bg: "rgba(256, 256, 256, 0.1)" }}
			>
				<IconMenu2 size={24} />
			</Button>

			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				size={"sm"}
				bgGradient={"blue"}
				color="white"
			>
				<DrawerHeader>Data Dreamers</DrawerHeader>
				<DrawerBody>
					<Flex direction="column" gap={6} mt={6} w={"sm"}>
						{List.map((item) => (
							<Motion initial="initial" whileHover="animate" key={item.title}>
								<Link href={item.href} onClick={onClose}>
									<Text
										fontSize={"lg"}
										color={"white"}
										_hover={{ bgGradient: "white", bgClip: "text" }}
									>
										{item.title}
									</Text>
									<Motion
										bgGradient="white"
										h="1px"
										variants={underlineAnimation}
									/>
								</Link>
							</Motion>
						))}
					</Flex>
				</DrawerBody>
			</Drawer>
		</>
	);
};

export default SideMenu;
