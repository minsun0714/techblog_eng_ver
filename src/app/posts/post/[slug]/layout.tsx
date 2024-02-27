function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="m-40 flex h-full w-2/3 text-pretty border border-gray p-10">
			{children}
		</section>
	);
}
export default PostLayout;
