// import CardComponent from './components/CardComponent';
import dynamic from 'next/dynamic';
import React from 'react';
import { getArticles } from '@/service/useGetArticles';

interface IArticle {
	id: number;
	title: string;
	content: string;
}

const CardComponent = dynamic(() => import('./components/CardComponent'), {
	loading: () => <p>Loading...</p>,
});

const PostsPage = async () => {
	const articles = await getArticles();
	return (
		<ul className="flex flex-col items-center justify-center gap-y-48 pb-40 pt-96">
			{articles?.reverse().map((article: IArticle) => {
				return (
					<li key={article.id}>
						<CardComponent id={article.id} title={article.title} />
					</li>
				);
			})}
		</ul>
	);
};

export default PostsPage;
