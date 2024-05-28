interface IArticle {
	id: number;
	title: string;
	content: string;
}

export const getArticles = async (params: string[]): Promise<IArticle[]> => {
	const [category1, category2] = params;
	const response = await fetch(
		`http://localhost:8000/articles?category1=${category1}&category2=${category2}`,
		{
			cache: 'no-store',
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch articles');
	}
	return await response.json();
};

export const getArticleById = async (id: string): Promise<IArticle> => {
	const response = await fetch(`http://localhost:8000/articles/${id}`);
	if (!response.ok) {
		throw new Error('Failed to fetch articles');
	}
	return await response.json();
};
