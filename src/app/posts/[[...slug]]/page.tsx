import React from 'react';
import Card from '@/app/(common)/components/Card';
import DummyImg from 'public/dummyImg.png';

const PostsPage = () => {
	return (
		<ul className="flex flex-col items-center justify-center gap-y-96 pb-40 pt-96">
			<li>
				<Card isBig={true} imgUrl={DummyImg} title="제목" />
			</li>
			<li>
				<Card isBig={true} imgUrl={DummyImg} title="제목" />
			</li>
		</ul>
	);
};

export default PostsPage;
