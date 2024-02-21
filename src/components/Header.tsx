import Link from 'next/link';
import { NavItems } from '@/util/enum';

const Header = () => {
	return (
		<header className="flex flex-row items-center justify-around h-16 border-b border-gray-light">
			<Link
				href={NavItems.home}
				className="flex justify-center w-1/6 m-4 text-gray text-nowrap"
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
