import Image from 'next/image';
import MyInfo from '@/components/MyInfo';
import Card from '@/components/Card';
import ProfileImage from '../../public/profile.jpeg';
import DummyImage from '../../public/dummyImg.png';

export default async function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between p-24">
			<section className="flex flex-col items-center justify-center">
				<div>
					<Image
						alt="profile image"
						src={ProfileImage}
						width={400}
						height={400}
						className="border border-gray-light rounded-full object-cover h-80 w-80 "
					/>
				</div>
				<MyInfo />
			</section>
		</main>
	);
}
