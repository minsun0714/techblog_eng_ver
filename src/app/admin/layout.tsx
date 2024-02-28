function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex h-screen w-screen justify-center">
			{children}
		</section>
	);
}
export default AdminLayout;
