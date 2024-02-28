import Image from 'next/image';
import MyInfo from '@/app/(common)/components/MyInfo';
import RecentPostsLayout from '@/app/recentPosts/layout';
import RecentPostsPage from '@/app/recentPosts/page';
import ProfileImage from 'public/profile.jpeg';

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
						className="h-80 w-80 rounded-full border border-gray-light object-cover "
					/>
				</div>
				<MyInfo />
				<RecentPostsLayout>
					<RecentPostsPage />
				</RecentPostsLayout>
			</section>
		</main>
	);
}
