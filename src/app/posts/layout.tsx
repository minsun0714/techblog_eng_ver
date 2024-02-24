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
		<section className="flex flex-row">
			<SideBar menuData={menuData} />
			{children}
		</section>
	);
};
export default RecentPostsLayout;
