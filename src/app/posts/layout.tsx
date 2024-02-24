function RecentPostsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-row">
			<aside className="h-screen w-96 bg-black text-white">side menu</aside>
			{children}
		</section>
	);
}
export default RecentPostsLayout;
