import { Container, Flex, Heading, Text } from "@yamada-ui/react";
import HeroImage from "~/components/layout/HeroImage";

const imageData = {
	src: "/images/challenge-lab-02.avif",
	alt: "Data Dreamers",
	priority: true,
};

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...imageData}>ABOUT</HeroImage>
			<Container maxW={"4xl"}>
				<Heading>私たちの活動について</Heading>
				<Heading as={"h2"} size={"md"}>
					Data Dreamers とは？
				</Heading>
				<Text>aaa</Text>
			</Container>
		</Flex>
	);
}
