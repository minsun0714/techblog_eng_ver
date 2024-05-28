import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
	imgUrl: StaticImageData;
	title: string;
};

const RecentCard = ({ imgUrl, title }: CardProps) => {
	return (
		<div
			className={
				'relative flex h-[220px] w-[382px] flex-col justify-end lg:w-[382px]'
			}
		>
			<Image
				className="absolute my-3 rounded-2xl object-cover"
				src={imgUrl}
				alt={imgUrl.src.slice(imgUrl.src.lastIndexOf('/') + 1)}
			/>
			<div className="absolute rounded-b-2xl border border-gray-light bg-white">
				<div
					className={
						'relative flex h-24 w-[380px] flex-col items-center justify-stretch pt-3'
					}
				>
					<label className={'absolute w-[382px] pl-10'}>
						{title.length <= 60 ? title : title.slice(0, 60) + '..'}
					</label>
				</div>
			</div>
		</div>
	);
};

export default RecentCard;
