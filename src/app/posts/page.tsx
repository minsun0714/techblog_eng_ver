import React from 'react';
import Card from '@/components/Card';
import DummyImg from 'public/dummyImg.png';

const PostsPage = () => {
	return (
		<ul className="flex flex-col items-center justify-center">
			<li className="pt-[550px]">
				<Card isBig={true} imgUrl={DummyImg} title="제목" />
			</li>
			<li className="pt-[550px]">
				<Card isBig={true} imgUrl={DummyImg} title="제목" />
			</li>
		</ul>
	);
};

export default PostsPage;
