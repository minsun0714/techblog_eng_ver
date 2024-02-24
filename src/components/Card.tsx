import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
	isBig?: boolean;
	imgUrl: StaticImageData;
	title: string;
};

const Card = ({ isBig, imgUrl, title }: CardProps) => {
	return (
		<div
			className={
				'relative flex flex-col justify-end' +
				` ${isBig ? 'h-[180px]' : 'h-[220px]'} ${isBig ? 'min-w-[1002px]' : 'min-w-[382px]'} `
			}
		>
			<Image
				className="absolute my-3 rounded-2xl object-cover"
				src={imgUrl}
				alt={imgUrl.src.slice(imgUrl.src.lastIndexOf('/') + 1)}
			/>
			<div className="absolute rounded-b-2xl border border-gray-light bg-white ">
				<div
					className={
						'relative flex flex-col items-center justify-stretch pt-3' +
						` ${isBig ? 'h-40' : 'h-24'} ${isBig ? 'w-[1000px]' : 'w-[380px]'} `
					}
				>
					<label
						className={
							'absolute pl-10' +
							` ${isBig ? 'min-w-[1002px]' : 'min-w-[382px]'} `
						}
					>
						{title.length <= 60 ? title : title.slice(0, 60) + '..'}
					</label>
				</div>
			</div>
		</div>
	);
};

export default Card;
