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
				` ${isBig ? 'h-[400px]' : 'h-[220px]'} ${isBig ? 'w-screen' : 'w-[382px]'} ${isBig ? 'lg:w-[972px]' : 'lg:w-[382px]'} `
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
						'relative flex h-24 flex-col items-center justify-stretch pt-3' +
						` ${isBig && 'md:h-32'} ${isBig && 'lg:h-40'} ${isBig ? 'w-[970px]' : 'w-[380px]'} `
					}
				>
					<label
						className={
							'absolute pl-10' + ` ${isBig ? 'w-[970px]' : 'w-[382px]'} `
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
