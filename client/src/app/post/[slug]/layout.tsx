const PostLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen w-full items-start justify-center py-24">
			<main className="flex w-2/3 lg:w-[900px]">{children}</main>
		</div>
	);
};
export default PostLayout;
