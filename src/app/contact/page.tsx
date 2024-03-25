import { IconArrowNarrowRight } from "@tabler/icons-react";
import {
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Motion,
	Spacer,
	Text,
	VStack,
} from "@yamada-ui/react";
import HeroImage from "~/components/layout/HeroImage";

const heroImageData = {
	src: "/images/challenge-lab-02.avif",
	alt: "Data Dreamers",
	priority: true,
};

const Subjects = [
	"学部",
	"全学部全学科",
	"学年",
	"学部1年生～4年生",
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
					<Heading>募集対象</Heading>
					<Grid templateColumns={"1fr 2fr"} gap={4}>
						{Subjects.map((subject) => (
							<Text key={subject}>{subject}</Text>
						))}
					</Grid>
				</Container>
				<Motion whileHover={"animate"} variants={buttonAnimation}>
					<Button
						size={"lg"}
						bgGradient={"white"}
						_hover={{ bgGradient: "whiteHover", transition: "ease" }}
						w="full"
						rightIcon={<IconArrowNarrowRight />}
					>
						詳細はこちら
					</Button>
				</Motion>
			</Container>
		</Flex>
	);
}
