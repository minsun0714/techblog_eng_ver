function RecentPostsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="mt-20 h-screen overflow-visible">
			<h1 className="text-start">Recent posts</h1>
			{children}
		</section>
	);
}
export default RecentPostsLayout;
