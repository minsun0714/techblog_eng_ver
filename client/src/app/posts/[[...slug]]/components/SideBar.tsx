import Link from 'next/link';
import React from 'react';

export type MenuDataTuple = [string, string[]];

export type SideBarProps = {
	menuData: MenuDataTuple[];
};

const SideBar = ({ menuData }: SideBarProps) => {
	return (
		<aside className="sticky top-16 hidden h-[calc(100vh-4rem)] flex-col whitespace-nowrap bg-black text-gray-light xl:flex xl:min-w-[400px] xl:justify-start">
			<ul className="mx-16 my-24">
				{menuData.map(([menu, subMenuList]: MenuDataTuple, i: number) => {
					const menuPath = menu.toLowerCase();
					return (
						<li key={i} className="my-4">
							<Link href={`/posts/${menuPath}`}>{'❍ ' + menu}</Link>
							<ul>
								{subMenuList.map((subMenu, j) => {
									const subMenuPath = subMenu.toLowerCase().replace(/ /g, '-');
									return (
										<li className="my-1 ml-4" key={j}>
											<Link href={`/posts/${menuPath}/${subMenuPath}`}>
												{'❑ ' + subMenu}
											</Link>
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
