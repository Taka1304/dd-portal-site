import { Box, Flex, Heading, Text } from "@yamada-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<Box as={"footer"} p={4} w={"full"} h={"60"} bgGradient={"blue"}>
			<Flex
				as={Link}
				direction="row"
				href={"/"}
				alignItems={"center"}
				w={"full"}
			>
				<Image
					src="/images/icon-removebg.png"
					alt="Data Dreamers"
					width={50}
					height={50}
				/>
				<Heading as={"h1"} fontWeight={"bold"} color={"white"} fontSize={"2xl"}>
					Data Dreamers
				</Heading>
			</Flex>
			<Text variant={""} fontSize="sm" color={"white"}>
				&copy; 2024 Data Dreamers. All Rights Reserved.
			</Text>
		</Box>
	);
};

export default Footer;
