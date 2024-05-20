import useSWR from 'swr';

export const useGetCategory = () => {
	const getCategory1 = async () => {
		const response = await fetch('http://localhost:8000/category');
		const data = await response.json();
		return data.category;
	};

	return useSWR('category', getCategory1);
};

export const useGetCategoryChildren = (categoryId: number) => {
	const getCategory2 = async () => {
		const response = await fetch(
			`http://localhost:8000/category/2?id=${categoryId}`,
		);
		const data = await response.json();
		const categoryChildren = data.category.flat();
		return categoryChildren;
	};

	return useSWR('categoryChildren', getCategory2);
};
