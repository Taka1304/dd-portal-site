// components/features/SearchInput.tsx
"use client";

import { Input } from "@yamada-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const initialSearchWord = searchParams.get("q") || "";
	const [searchWord, setSearchWord] = useState(initialSearchWord);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const params = new URLSearchParams(Array.from(searchParams.entries()));
			params.set("q", searchWord);
			router.push(`?${params.toString()}`);
		}
	};

	return (
		<Input
			name="q"
			value={searchWord}
			placeholder="検索ワードを入力"
			onChange={(e) => setSearchWord(e.target.value)}
			onKeyDown={handleKeyDown}
		/>
	);
};
