import React from 'react';
import Card from '@/app/(common)/components/Card';
import DummyImage from 'public/dummyImg.png';

const DummyCards = () => {
	return (
		<li className="flex flex-col items-center justify-center">
			<Card imgUrl={DummyImage} title="card" />
		</li>
	);
};

const RecentPostsPage = () => {
	const array = [...Array(6)];
	return (
		<ul className="grid grid-cols-1 gap-x-4 gap-y-28 py-12 lg:grid-cols-2 xl:grid-cols-3">
			{array.map((_, index) => (
				<DummyCards key={index} />
			))}
		</ul>
	);
};

export default RecentPostsPage;
