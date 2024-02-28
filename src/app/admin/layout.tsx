function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex h-screen w-screen justify-center border border-gray">
			{children}
		</section>
	);
}
export default AdminLayout;
