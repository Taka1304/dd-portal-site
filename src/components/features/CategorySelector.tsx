"use client";

import { Autocomplete, AutocompleteOption } from "@yamada-ui/react";
import { useRouter } from "next/navigation";

type CategorySelectorProps = {
	categories: { id: string; name: string }[];
	selectedCategory: string;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
	categories,
	selectedCategory,
}) => {
	const router = useRouter();
	const handleCategoryChange = (value: string) => {
		const currentParams = new URLSearchParams(window.location.search); // 現在のURLクエリパラメータを取得
		currentParams.set("category", value); // categoryパラメータを設定または更新
		router.push(`?${currentParams.toString()}`); // 更新されたクエリパラメータを使ってURLをプッシュ
	};

	return (
		<Autocomplete
			placeholder="カテゴリ選択"
			emptyMessage="存在しないカテゴリです"
			defaultValue={selectedCategory}
			onChange={handleCategoryChange}
		>
			{categories.map((category) => (
				<AutocompleteOption key={category.id} value={category.id}>
					{category.name}
				</AutocompleteOption>
			))}
		</Autocomplete>
	);
};
