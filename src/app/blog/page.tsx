import React from "react";
import { client } from "~/libs/microcms/client";
import type { Blog } from "~/types/blog";

const BlogListPage = async () => {
	const _data = await client.get<Blog>({ endpoint: "blogs" });
	return <></>;
};

export default BlogListPage;
