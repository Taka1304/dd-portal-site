import {
	Box,
	Divider,
	HStack,
	Heading,
	Tag,
	Text,
	VStack,
} from "@yamada-ui/react";
import dayjs from "dayjs";
import React from "react";
import { Article } from "~/components/features/Article";
import Section from "~/components/layout/Section";
import { client } from "~/libs/microcms/client";
import type { Content } from "~/types/blog";

interface Props {
	params: {
		id: string;
	};
}

const BlogContentPage = async ({ params }: Props) => {
	const { id } = params;
	const data = await client.get<Content>({ endpoint: "blogs", contentId: id });

	return (
		<VStack>
			<Section>
				<Box>
					<Heading>{data.title}</Heading>
					<Box>
						{data.categories.map((category) => (
							<Tag size="sm" key={category.id}>
								{category.name}
							</Tag>
						))}
					</Box>
					<HStack gap={2}>
						<Text>投稿日: {dayjs(data.publishedAt).format("YYYY/MM/DD")}</Text>
						<Text>更新日: {dayjs(data.updatedAt).format("YYYY/MM/DD")}</Text>
					</HStack>
				</Box>
				<Divider />
				<Article data={data} />
			</Section>
		</VStack>
	);
};

export default BlogContentPage;
