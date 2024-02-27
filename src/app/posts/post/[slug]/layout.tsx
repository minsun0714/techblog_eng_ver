function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="m-40 flex h-full w-2/3 flex-col border border-gray p-10">
			{children}
		</section>
	);
}
export default PostLayout;
