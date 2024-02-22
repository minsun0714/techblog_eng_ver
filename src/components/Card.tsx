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
				className="border border-gray-light w-[450px] rounded-t-2xl h-[220px] object-cover"
				src={imgUrl}
				alt={imgUrl.src.slice(imgUrl.src.lastIndexOf('/') + 1)}
			/>
			<div className="flex flex-col justify-stretch items-center pt-3 border border-gray-light w-[450px] h-24 rounded-b-2xl relative">
				<label className="w-[430px] pl-4 absolute">
					{title.length <= 60 ? title : title.slice(0, 60) + '..'}
				</label>
				<time className="w-[450px] pr-8 mt-12 text-end absolute text-gray-light">
					{date}
				</time>
			</div>
		</>
	);
};

export default Card;
