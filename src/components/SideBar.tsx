import React from 'react';

export type MenuDataTuple = [string, string[]];

export type SideBarProps = {
	menuData: MenuDataTuple[];
};

const SideBar = ({ menuData }: SideBarProps) => {
	return (
		<aside className="flex h-screen min-w-96 flex-col overflow-y-scroll whitespace-nowrap bg-black text-gray-light">
			<ul className="m-16">
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
