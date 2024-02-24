import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export type MenuDataTuple = [string, string[]];

export type SideBarProps = {
	menuData: MenuDataTuple[];
};

const SideBar = ({ menuData }: SideBarProps) => {
	return (
		<aside className="flex h-screen w-96 flex-col bg-black text-gray-light">
			<div className="flex w-full justify-end p-4">
				<IoIosArrowBack size={20} />
			</div>
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
