import React from 'react';
import Card from '@/components/Card';
import DummyImage from 'public/dummyImg.png';

const DummyCards = () => {
	return (
		<li className="flex flex-col items-center justify-center">
			<Card imgUrl={DummyImage} title="card" date="2023.02.23" />
		</li>
	);
};

const RecentPostsPage = () => {
	const array = [...Array(6)];
	return (
		<div>
			<h1 className="p-2">Recent Posts</h1>
			<ul className="grid grid-cols-3 items-center justify-center gap-10">
				{array.map((_, index) => (
					<DummyCards key={index} />
				))}
			</ul>
		</div>
	);
};

export default RecentPostsPage;
