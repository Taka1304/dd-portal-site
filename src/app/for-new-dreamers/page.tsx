import { Flex, Grid, Heading, Text } from "@yamada-ui/react";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import HeroImage from "~/components/layout/HeroImage";
import Section from "~/components/layout/Section";
import { FLOWS } from "~/constants/flows";

export const metadata: Metadata = {
	title: "新入生の方へ",
};

const imageData = {
	src: "/images/students-working-on-project.jpg",
	alt: "students-working-on-project",
	priority: true,
};

const tools = [
	"データ分析",
	"Python(Pandas, Numpy, Matplotlib, Polars, ...etc.)",
	"機械学習",
	"sk-learn, Pytorch, Tensorflow, ...etc.",
	"BIツール",
	"Tableau",
	"仮想環境",
	"Docker",
];

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...imageData}>For New Dreamers</HeroImage>
			<Section>
				<Heading as="h1" size={"2xl"} textAlign="center">
					新入生の方へ
				</Heading>
			</Section>
			<Section>
				<Heading as="h2" size={"lg"} id="skills">
					身につくスキル
				</Heading>
				<Text>
					本活動を通して、基本的なデータサイエンティストに必要なスキルを身につけることができます。
				</Text>
				<Flex pos={"relative"} w="full" height="50vw" maxH="xl">
					<Image
						src="/images/skill.png"
						alt="skill"
						fill
						sizes="(max-width: 600px) 100vw, 48rem"
						style={{ objectFit: "contain" }}
					/>
				</Flex>
				<Text>
					また、データ分析を行っていく上で様々な技術を学ぶことができます。
				</Text>
				<Heading as={"h3"} size={"md"}>
					具体的な利用ツール・ライブラリ
				</Heading>
				<Grid templateColumns="1fr 2fr" gap={4}>
					{tools.map((tool) => (
						<Text key={tool}>{tool}</Text>
					))}
				</Grid>
				<Text>
					データサイエンティストを目指す場合、Kaggle・Signate等での入賞経験やハッカソン優勝経験などがあると、就職活動において有利になるケースがあります。
					<br />
					積極的に参加し、スキルアップを図りましょう。
				</Text>
			</Section>
			<Section parent={{ bgColor: "gray.50" }}>
				<Heading as="h2" size={"lg"} id="schedule">
					スケジュール
				</Heading>

				<Heading as="h3" size={"md"}>
					活動の流れ
				</Heading>
				<Grid templateColumns="2fr 2fr 1fr" gap={4}>
					{FLOWS.map((flow) => (
						<Text key={flow}>{flow}</Text>
					))}
				</Grid>
				{/* <Text color="gray.700">
					※活動場所については随時お知らせいたします。
				</Text> */}
				<Text color={"red.500"} fontWeight={"bold"}>
					仮加入申請を行ったうえで、全3回の研修すべてに出席した方のみが本加入となります。
					<br />
					本加入後はグループの希望アンケートを取り、グループ配属となります。
				</Text>
				<Text color="gray.700">
					授業などが重なっている場合、個別に対応させていただきます。
					<br />
					事前にその旨をお知らせください。
				</Text>
			</Section>
		</Flex>
	);
}
