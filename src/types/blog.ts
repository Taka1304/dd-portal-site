interface Base {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
}

export interface Category extends Base {
	name: string;
}

export interface EyeCatch {
	url: string;
	width: number;
	height: number;
}

export interface Blog {
	contents: Content[];
	totalCount: number;
	offset: number;
	limit: number;
}

export interface Content extends Base {
	title: string;
	content: string;
	eyecatch: EyeCatch;
	category: Category;
}
