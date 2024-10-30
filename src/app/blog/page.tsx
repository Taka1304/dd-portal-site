import {
	Box,
	Card,
	CardBody,
	CardHeader,
	HStack,
	Heading,
	Input,
	Loading,
	SimpleGrid,
	Spacer,
	Tag,
	Text,
	VStack,
} from "@yamada-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Section from "~/components/layout/Section";
import { RandomDummyImage } from "~/constants/dummyImages";
import { client } from "~/libs/microcms/client";
import type { Blog } from "~/types/blog";

export const revalidate = 300;

type BloglistPageProps = {
	searchWord?: string;
};

const BlogListPage = async ({ searchWord = "" }: BloglistPageProps) => {
	const data = await client.get<Blog>({
		endpoint: "blogs",
		queries: {
			filters: searchWord ? `title[contains]${searchWord}` : undefined,
		},
	});

	if (!data) {
		return <Loading variant="circles" />;
	}

	return (
		<VStack>
			<HStack>
				<HStack>
					<Spacer />
					<Input></Input>
				</HStack>
			</HStack>
			<Section>
				<Heading as="h1" size="2xl">
					記事一覧
				</Heading>
				<SimpleGrid w="full" columns={{ base: 3, sm: 1 }} gap={4}>
					{data.contents.map((blog) => (
						<Link href={`blog/${blog.id}`} key={blog.id}>
							<Card>
								<Box
									position="relative"
									width="100%"
									height="150px"
									bgGradient={"white"}
								>
									<Image
										src={blog.eyecatch?.url ?? RandomDummyImage()}
										alt={blog.title}
										fill
										style={{ objectFit: "contain" }}
									/>
								</Box>
								<CardHeader minH={"16"} alignItems={"start"}>
									<Heading as={"h3"} size={"sm"} lineClamp={2}>
										{blog.title}
									</Heading>
								</CardHeader>
								<CardBody>
									<HStack>
										{blog.categories?.map((category) => (
											<Tag key={category.id} size="sm">
												{category.name}
											</Tag>
										))}
									</HStack>
									<Text>{dayjs(blog.publishedAt).format("YYYY/MM/DD")}</Text>
								</CardBody>
							</Card>
						</Link>
					))}
				</SimpleGrid>
			</Section>
		</VStack>
	);
};

export default BlogListPage;
