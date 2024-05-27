import { usePostArticle } from '@/service/usePostArticles';

const Form = ({ children }: { children: React.ReactNode }) => {
	const handleSubmit = usePostArticle();
	return (
		<form className="flex w-2/3 flex-col gap-y-8 p-20" onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default Form;
