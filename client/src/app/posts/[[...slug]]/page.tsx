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
	const articles = await getArticles(params.slug);
	return (
		<ul className="my-40 flex h-full w-2/3 flex-col items-center justify-start gap-y-2">
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
