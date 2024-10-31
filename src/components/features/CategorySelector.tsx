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
		router.push(`?category=${value}`);
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
