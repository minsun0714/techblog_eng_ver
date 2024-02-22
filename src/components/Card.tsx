import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
	imgUrl: StaticImageData;
	title: string;
	date: string;
};

const Card = ({ imgUrl, title, date }: CardProps) => {
	return (
		<>
			<Image
				className="h-[220px] w-[450px] rounded-t-2xl border border-gray-light object-cover"
				src={imgUrl}
				alt={imgUrl.src.slice(imgUrl.src.lastIndexOf('/') + 1)}
			/>
			<div className="relative flex h-24 w-[450px] flex-col items-center justify-stretch rounded-b-2xl border border-gray-light pt-3">
				<label className="absolute w-[430px] pl-4">
					{title.length <= 60 ? title : title.slice(0, 60) + '..'}
				</label>
				<time className="absolute mt-12 h-4 w-[450px] pr-8 text-end text-gray-light">
					{date}
				</time>
			</div>
		</>
	);
};

export default Card;
