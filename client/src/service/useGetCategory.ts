import useSWR from 'swr';

type Category = {
	id: number;
	title: string;
};

type Children = {
	children: Category[];
};

export const useGetCategory = (): (Category & Children)[] => {
	const getCategory1 = async () => {
		const response = await fetch('http://localhost:8000/category');
		const data = await response.json();
		return data.category;
	};

	const { data: category1 } = useSWR('category', getCategory1);

	return category1;
};

export const useGetCategoryChildren = () => {
	const getCategory2 = async () => {
		const response = await fetch('http://localhost:8000/category/2');
		const data = await response.json();
		const categoryChildren = data.category.flat();
		return categoryChildren;
	};

	const { data: category2 } = useSWR('categoryChildren', getCategory2);

	return category2;
};
