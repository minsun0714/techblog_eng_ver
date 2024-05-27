import usePostingFieldStore from '@/app/admin/store/usePostingFieldStore';

export const useGetArticles = () => {
	const { title, categoryId, categoryChildId, content } =
		usePostingFieldStore();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch('http://localhost:8000/articles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				category1Id: categoryId,
				category2Id: categoryChildId,
				content,
			}),
		});
		return await response.json();
	};
	return handleSubmit;
};
