import useSWRMutation from 'swr/mutation';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import usePostingFieldStore from '@/app/admin/store/usePostingFieldStore';

export const usePostArticle = () => {
	const { title, categoryId, categoryChildId, content } =
		usePostingFieldStore();
	const router = useRouter();
	const postArticle = async () => {
		await fetch('http://localhost:8000/articles', {
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
	};
	const options = {
		onSuccess: () => router.push('/posts' as Route),
	};
	const { trigger } = useSWRMutation('articles', postArticle, options);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await trigger();
	};
	return handleSubmit;
};
