import SideBar from '@/components/SideBar';
import getSideMenuData from '@/service/fetchMenu';

const RecentPostsLayout = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const data = await getSideMenuData();
	const menuData = Object.entries(data);

	return (
		<div className="flex">
			<SideBar menuData={menuData} />
			<main className="flex w-full flex-col">{children}</main>
		</div>
	);
};
export default RecentPostsLayout;
