import { Container, Flex, Heading, Text } from "@yamada-ui/react";
import HeroImage from "~/components/layout/HeroImage";

const Images = {
	src: "/images/challenge-lab-01.avif",
	alt: "Data Dreamers",
	priority: true,
};

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...Images}>
				昨日より良い明日を
				<br />
				&emsp;データサイエンスで。
			</HeroImage>
			<Container maxW={"4xl"}>
				<Heading>About</Heading>
				<Heading as={"h2"} size={"md"}>
					Data Dreamers とは？
				</Heading>
				<Text>aaa</Text>
			</Container>
		</Flex>
	);
}
