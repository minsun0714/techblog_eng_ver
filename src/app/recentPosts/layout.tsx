function RecentPostsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="mt-16 h-screen overflow-visible">
			<h1 className="text-star pl-2">Recent posts</h1>
			{children}
		</section>
	);
}
export default RecentPostsLayout;
