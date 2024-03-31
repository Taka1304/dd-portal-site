import { Divider, Flex, Grid, Heading, Text } from "@yamada-ui/react";
import dayjs from "dayjs";
import HeroImage from "~/components/layout/HeroImage";
import Section from "~/components/layout/Section";
import { NEWS } from "~/constants/news";

export default function Home() {
	const today = dayjs();

	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage
				src={"/images/writing-sationary.jpg"}
				alt={"Data Dreamers"}
				priority
			>
				NEWS
			</HeroImage>
			<Section>
				<Heading as={"h2"} size={"lg"}>
					メディア掲載情報
				</Heading>
			</Section>

			<Section>
				<Flex direction={"column"} gap={4}>
					{NEWS.map((content, index) => {
						const date = dayjs(content.date);
						const isWithinOneMonth = date.isAfter(today.subtract(1, "month"));
						return (
							<>
								<Grid
									as="a"
									href={content.link}
									target="_blank"
									rel="noreferrer"
									templateColumns={{ base: "1fr 2fr", md: "1fr" }}
									key={content.title}
									gapY="1"
								>
									<Flex align={"center"} position={"relative"}>
										<Text>{date.format("YYYY/MM/DD")}</Text>
										{isWithinOneMonth && (
											<Text
												as="b"
												position={"absolute"}
												top={-2}
												left={-6}
												transform={"rotate(-15deg)"}
												bgGradient={"blue"}
												bgClip={"text"}
											>
												NEW!
											</Text>
										)}
									</Flex>
									<Text as={"b"} lineClamp={{ base: 2, md: 3 }}>
										{content.title}
									</Text>
								</Grid>
								{index !== NEWS.length - 1 && <Divider my={2} />}
							</>
						);
					})}
				</Flex>
			</Section>
		</Flex>
	);
}
