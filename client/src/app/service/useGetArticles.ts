interface IArticle {
	id: number;
	title: string;
	content: string;
}

export const getArticles = async (
	params: (string | undefined)[] | undefined,
): Promise<IArticle[]> => {
	let queryString = '';

	if (params) {
		params = params.map((param) =>
			param ? param.toLowerCase().replace(/-/g, ' ') : param,
		);
		const [category1, category2] = params;
		queryString = `?category1=${category1}`;
		if (category2) queryString += `&category2=${category2}`;
	}

	const response = await fetch(`http://localhost:8000/articles${queryString}`, {
		cache: 'no-store',
	});
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
