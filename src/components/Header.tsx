import Link from 'next/link';
import React from 'react';

enum NavItems {
	'home' = '/',
	'posts' = '/posts',
}

const Header = () => {
	return (
		<header className="flex flex-row items-center justify-around h-16 border-b border-gray-light">
			<section className="flex justify-center w-1/6 m-4 text-gray text-nowrap">
				Tech Blog_Jasmine
			</section>
			<nav>
				<ul className="flex flex-row">
					{Object.entries(NavItems).map(([label, href]) => (
						<li key={label} className="m-6 text-gray">
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
