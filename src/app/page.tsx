import Image from 'next/image';
import profileImage from '../../public/profile.jpeg';

export default async function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between p-24">
			<section className="flex flex-col items-center justify-center">
				<div>
					<Image
						alt="profile image"
						src={profileImage}
						width={400}
						height={400}
						className="border border-gray-light rounded-full object-cover h-80 w-80 "
					/>
				</div>
				<div>
					<h1>Lee Minsun</h1>
				</div>
			</section>
		</main>
	);
}
