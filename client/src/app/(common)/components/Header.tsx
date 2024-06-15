import { Route } from 'next';
import Link from 'next/link';
import { NavItems } from '@/(common)/util/enum';

const Header = () => {
	return (
		<header className="sticky top-0 z-10 flex h-16 w-full flex-row items-center justify-around border border-gray-light bg-white ">
			<Link
				href={NavItems.home}
				className="m-4 flex w-1/6 justify-center text-nowrap text-gray"
			>
				Tech Blog_Jasmine
			</Link>
			<nav>
				<ul className="flex flex-row">
					{Object.entries(NavItems).map(([label, href]) => (
						<li key={label} className="m-6 text-gray">
							<Link href={href as Route}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
