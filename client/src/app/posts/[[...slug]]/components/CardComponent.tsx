import { Route } from 'next';
import Link from 'next/link';

type CardComponentType = {
	id: number;
	title: string;
};

const CardComponent = ({ id, title }: CardComponentType) => {
	return (
		<Link href={`/post/${id}` as Route}>
			<div>{title}</div>
		</Link>
	);
};

export default CardComponent;
