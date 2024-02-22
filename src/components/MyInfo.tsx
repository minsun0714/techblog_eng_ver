import Link from 'next/link';
import React from 'react';
import { SocialLink } from '@/util/enum';

const MyInfo = () => {
	return (
		<div>
			<ul className="mt-11 flex flex-col items-center justify-center gap-y-4 text-xl text-gray">
				<li>
					<label>Lee Minsun (Jasmine)</label>
				</li>
				<li>
					<label>Frontend Developer</label>
				</li>
				<li>
					<label>Github</label>
					<Link href={SocialLink.Github} className="text-gray-mid-light">
						&nbsp;&nbsp;<em>{SocialLink.Github}</em>
					</Link>
				</li>
				<li>
					<label>Tech blog (in Korean)</label>
					<Link href={SocialLink.Velog} className="text-gray-mid-light">
						&nbsp;&nbsp;<em>{SocialLink.Velog}</em>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MyInfo;
