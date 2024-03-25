import {
	IconBrandGithub,
	IconBrandX,
	IconBrandYoutube,
} from "@tabler/icons-react";
import {
	Button,
	Container,
	Divider,
	Flex,
	Heading,
	Text,
} from "@yamada-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
	{
		title: "About",
		href: "/about",
		links: [
			{
				label: "Data Dreamers",
				href: "/about#data-dreamers",
			},
			{
				label: "Our Mission",
				href: "/about#our-mission",
			},
			{
				label: "Our Team",
				href: "/about#our-team",
			},
		],
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

const Footer = () => {
	const groups = data.map((item) => {
		const links = item.links?.map((link) => (
			<Link key={link.label} href={link.href}>
				<Text fontSize={"sm"} color={"gray.200"} _hover={{ color: "gray.50" }}>
					{link.label}
				</Text>
			</Link>
		));
		return (
			<Flex direction={"column"} key={item.title} w="10rem" gap={1}>
				<Link href={item.href}>
					<Text
						fontSize={"lg"}
						color={"white"}
						_hover={{ bgGradient: "white", bgClip: "text" }}
					>
						{item.title}
					</Text>
				</Link>
				{links}
			</Flex>
		);
	});

	return (
		<Flex justify={"center"} w={"full"} bgGradient={"blue"}>
			<Container maxW={"6xl"} p={4} as={"footer"} gap={{ base: "lg", md: "0" }}>
				<Flex
					direction={{ base: "row", md: "column" }}
					justify={"space-between"}
					align={{ base: "start", md: "center" }}
				>
					<Flex as={Link} direction="row" href={"/"} alignItems={"center"}>
						<Image
							src="/images/icon-removebg.png"
							alt="Data Dreamers"
							width={50}
							height={50}
						/>
						<Heading
							as={"h1"}
							fontWeight={"bold"}
							color={"white"}
							fontSize={"2xl"}
						>
							Data Dreamers
						</Heading>
					</Flex>
					<Flex
						display={{ base: "flex", md: "none" }}
						direction={"row"}
						align={"start"}
					>
						{groups}
					</Flex>
				</Flex>
				<Divider py={2} />
				<Flex
					justify={"space-between"}
					align={{ base: "start", md: "center" }}
					pt={"md"}
					direction={{ base: "row", md: "column" }}
				>
					<Text variant={""} fontSize="sm" color={"gray.200"}>
						&copy; 2024 Data Dreamers. All Rights Reserved.
					</Text>
					<Flex>
						<Button
							bgColor={"transparent"}
							color={"gray.200"}
							_hover={{ color: "gray.50" }}
						>
							<IconBrandX />
						</Button>
						<Button
							bgColor={"transparent"}
							color={"gray.200"}
							_hover={{ color: "gray.50" }}
						>
							<IconBrandYoutube />
						</Button>
						<Button
							bgColor={"transparent"}
							color={"gray.200"}
							_hover={{ color: "gray.50" }}
						>
							<IconBrandGithub />
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Footer;
