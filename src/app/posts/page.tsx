import React from 'react';
import Card from '@/components/Card';
import DummyImg from 'public/dummyImg.png';

const PostsPage = () => {
	return (
		<main className="ml-64 flex min-h-screen flex-col items-end justify-center pt-80">
			<ul className="flex flex-col">
				<li className="py-[300px]">
					<Card isBig={true} imgUrl={DummyImg} title="제목" />
				</li>
			</ul>
		</main>
	);
};

export default PostsPage;
