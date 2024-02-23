import { Container, Flex, Heading } from "@yamada-ui/react";

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<Container maxW={"4xl"}>
				<Heading>Contact</Heading>
				{/* TODO: Contact form or Google form link */}
			</Container>
		</Flex>
	);
}
