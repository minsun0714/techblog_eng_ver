import React from 'react';
import Card from '@/app/(common)/components/Card';
import { getArticles } from '@/service/useGetArticles';
import DummyImg from 'public/dummyImg.png';

interface IArticle {
	id: number;
	title: string;
	content: string;
}

const PostsPage = async () => {
	const articles = await getArticles();
	return (
		<ul className="flex flex-col items-center justify-center gap-y-96 pb-40 pt-96">
			{articles?.reverse().map((article: IArticle) => {
				return (
					<li key={article.id}>
						<Card isBig={true} imgUrl={DummyImg} title={article.title} />
					</li>
				);
			})}
		</ul>
	);
};

export default PostsPage;
