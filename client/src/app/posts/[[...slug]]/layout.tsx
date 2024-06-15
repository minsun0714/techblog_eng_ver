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
		<div className="relative flex h-full">
			<SideBar menuData={menuData} />
			<main className="flex h-full w-full flex-col items-center justify-center">
				{children}
			</main>
		</div>
	);
};
export default RecentPostsLayout;
