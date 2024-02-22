import Link from 'next/link';
import { NavItems } from '@/util/enum';

const Header = () => {
	return (
		<header className="flex h-16 flex-row items-center justify-around border-b border-gray-light">
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
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
