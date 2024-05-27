interface IArticle {
	id: number;
	title: string;
	content: string;
}

export const getArticles = async (): Promise<IArticle[]> => {
	const response = await fetch('http://localhost:8000/articles');
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
