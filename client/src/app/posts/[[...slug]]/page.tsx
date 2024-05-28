import { Route } from 'next';
import Link from 'next/link';
import React from 'react';
import { getArticles } from '@/service/useGetArticles';

interface IArticle {
	id: number;
	title: string;
	content: string;
}

const PostsPage = async ({ params }: { params: { slug: string[] } }) => {
	console.log('📢[page.tsx:13]: params: ', params);
	const articles = await getArticles(params.slug);
	return (
		<ul className="flex w-2/3 flex-col items-center justify-center gap-y-2 py-40">
			{articles?.reverse().map((article: IArticle) => {
				return (
					<div className="w-full" key={article.id}>
						<Link href={`/post/${article.id}` as Route}>
							<li className="flex h-20 items-center justify-center rounded border-2 border-gray pl-4 text-gray">
								<label className="cursor-pointer">{article.title}</label>
							</li>
						</Link>
					</div>
				);
			})}
		</ul>
	);
};

export default PostsPage;
