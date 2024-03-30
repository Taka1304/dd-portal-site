import { IconArrowNarrowRight } from "@tabler/icons-react";
import {
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Motion,
	Text,
} from "@yamada-ui/react";
import HeroImage from "~/components/layout/HeroImage";

const heroImageData = {
	src: "/images/taking-notes-and-working-on-laptop.jpg",
	alt: "Data Dreamers",
	priority: true,
};

const Subjects = [
	"学部",
	"全学部全学科",
	"学年",
	"学部1年生～4年生、修士1年生~2年生、博士課程",
	"応募資格",
	"特になし",
];

const buttonAnimation = {
	initial: { scale: 1 },
	animate: { scale: 1.05 },
};

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...heroImageData}>Contact</HeroImage>
			<Container maxW={"4xl"}>
				<Heading as={"h2"} size={"md"}>
					Data Dreamers では、
					<br />
					共に頑張る仲間を募集しています。
				</Heading>
				<Container bgColor={"gray.50"}>
					<Heading as={"h2"} size={"lg"}>
						募集対象
					</Heading>
					<Grid templateColumns={"1fr 2fr"} gap={4}>
						{Subjects.map((subject) => (
							<Text key={subject}>{subject}</Text>
						))}
					</Grid>
				</Container>
				<Motion whileHover={"animate"} variants={buttonAnimation}>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSflxF76gRaBrgvqoWCrMN30Anx91Qsm8ISPDVREWwgaMcz8xQ/viewform"
						target="_blank"
						rel="noreferrer"
					>
						<Button
							size={"lg"}
							bgGradient={"white"}
							_hover={{ bgGradient: "whiteHover", transition: "ease" }}
							w="full"
							rightIcon={<IconArrowNarrowRight />}
						>
							申し込みはこちら
						</Button>
					</a>
				</Motion>
			</Container>
		</Flex>
	);
}
