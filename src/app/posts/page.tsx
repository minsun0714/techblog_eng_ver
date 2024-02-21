import React from 'react';

type PostsPageProps = {};

const PostsPage = () => {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24">
			<h1 className="px-4 py-2 text-black sm:px-8 sm:py-3 bg-sky-700 hover:bg-sky-800">
				posts
			</h1>
		</main>
	);
};

export default PostsPage;
