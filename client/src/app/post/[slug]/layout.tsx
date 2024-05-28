const PostLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen w-screen items-start justify-center py-24">
			<main className="flex w-2/3 items-center justify-center lg:w-[900px]">
				{children}
			</main>
		</div>
	);
};
export default PostLayout;
