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
		<ul className="mt-24 grid grid-cols-1 gap-x-4 gap-y-32 lg:grid-cols-2 xl:grid-cols-3">
			{array.map((_, index) => (
				<DummyCards key={index} />
			))}
		</ul>
	);
};

export default RecentPostsPage;
