import { Container, Flex, Heading, Text } from "@yamada-ui/react";

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<Container maxW={"4xl"}>
				<Heading>About</Heading>
				<Heading as={"h2"} size={"md"}>
					Data Dreamers とは？
				</Heading>
				<Text></Text>
			</Container>
		</Flex>
	);
}
