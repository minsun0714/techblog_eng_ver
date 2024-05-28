import { getArticleById } from '@/service/useGetArticles';

export default async function Page({ params }: { params: { slug: string } }) {
	const article = await getArticleById(params.slug);
	return (
		<main className="flex flex-col items-center justify-center gap-y-20">
			<h1 className="text-center text-5xl">{article.title}</h1>
			<p>{article.content}</p>
		</main>
	);
}
