import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
	isBig?: boolean;
	imgUrl: StaticImageData;
	title: string;
};

const bigCardStyle = {
	height: 'h-[180px]',
	width: 'w-1000px',
	minWidth: 'min-w-[1002px]',
	bottomHeight: 'h-40',
	bottomMinWidth: 'w-[1000px]',
};

const smallCardStyle = {
	height: 'h-[220px]',
	width: 'w-380px',
	minWidth: 'min-w-[382px]',
	bottomHeight: 'h-24',
	bottomMinWidth: 'w-[380px]',
};

const Card = ({ isBig, imgUrl, title }: CardProps) => {
	return (
		<div
			className={
				'relative flex' +
				` ${isBig ? bigCardStyle.height : smallCardStyle.height} ${isBig ? bigCardStyle.minWidth : smallCardStyle.minWidth} ` +
				'flex-col justify-end'
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
						'relative flex' +
						` ${isBig ? bigCardStyle.bottomHeight : smallCardStyle.bottomHeight} ${isBig ? bigCardStyle.bottomMinWidth : smallCardStyle.bottomMinWidth} ` +
						'flex-col items-center justify-stretch pt-3'
					}
				>
					<label
						className={
							'absolute' +
							` ${isBig ? bigCardStyle.minWidth : smallCardStyle.minWidth} ` +
							'pl-10'
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
