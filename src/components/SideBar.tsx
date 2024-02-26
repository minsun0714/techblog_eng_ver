import React from 'react';

export type MenuDataTuple = [string, string[]];

export type SideBarProps = {
	menuData: MenuDataTuple[];
};

const SideBar = ({ menuData }: SideBarProps) => {
	return (
		<aside className="sticky top-0 hidden h-screen flex-col whitespace-nowrap bg-black text-gray-light xl:flex xl:min-w-[400px] xl:justify-start">
			<ul className="mx-16 my-24">
				{menuData.map(([menu, subMenuList]: MenuDataTuple, i: number) => {
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
				})}
			</ul>
		</aside>
	);
};

export default SideBar;
