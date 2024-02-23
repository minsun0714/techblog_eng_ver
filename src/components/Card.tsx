import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
	imgUrl: StaticImageData;
	title: string;
	date: string;
};

const Card = ({ imgUrl, title, date }: CardProps) => {
	return (
		<div className="relative flex h-[220px] min-w-[452px] flex-col justify-end">
			<Image
				className="absolute my-3 rounded-2xl object-cover"
				src={imgUrl}
				alt={imgUrl.src.slice(imgUrl.src.lastIndexOf('/') + 1)}
			/>
			<div className="absolute rounded-b-2xl border border-gray-light bg-white ">
				<div className="relative flex h-24 min-w-[450px] flex-col items-center justify-stretch pt-3">
					<label className="absolute w-[430px] pl-4">
						{title.length <= 60 ? title : title.slice(0, 60) + '..'}
					</label>
					<time className="absolute mt-12 h-4 w-[450px] pr-6 text-end text-gray-light">
						{date}
					</time>
				</div>
			</div>
		</div>
	);
};

export default Card;
