import SideBar from '@/posts/[[...slug]]/components/SideBar';
import getSideMenuData from '@/service/fetchMenu';

const RecentPostsLayout = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const data = await getSideMenuData();
	const menuData = Object.entries(data);

	return (
		<div className="flex w-screen">
			<SideBar menuData={menuData} />
			<main className="flex w-screen flex-col items-center justify-center">
				{children}
			</main>
		</div>
	);
};
export default RecentPostsLayout;
