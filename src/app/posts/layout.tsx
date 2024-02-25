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
		<div className="flex h-screen flex-row">
			<SideBar menuData={menuData} />
			<main className="flex w-full flex-col items-center justify-center overflow-y-scroll pt-[700px]">
				{children}
			</main>
		</div>
	);
};
export default RecentPostsLayout;
