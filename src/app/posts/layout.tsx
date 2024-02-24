import { IoIosArrowBack } from 'react-icons/io';
import getSideMenuData from '@/service/fetchMenu';

const RecentPostsLayout = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	let menuData = await getSideMenuData();
	menuData = Object.entries(menuData);

	return (
		<section className="flex flex-row">
			<aside className="flex h-screen w-96 flex-col bg-black text-gray-light">
				<div className="flex w-full justify-end p-4">
					<IoIosArrowBack size={20} />
				</div>
				<ul className="m-16">
					{menuData.map(
						([menu, subMenuList]: [string, string[]], i: number) => {
							return (
								<li key={i} className="my-4">
									{'❍ ' + menu}
									<ul>
										{subMenuList.map((subMenu, j) => {
											return (
												<li className="my-1 ml-4" key={j}>
													{'❑ ' + subMenu}
												</li>
											);
										})}
									</ul>
								</li>
							);
						},
					)}
				</ul>
			</aside>
			{children}
		</section>
	);
};
export default RecentPostsLayout;
