import { FormElements } from '../page';
import { useForm, SubmitHandler } from 'react-hook-form';

const Form = ({ children }: { children: React.ReactNode }) => {
	const { handleSubmit } = useForm<FormElements>();

	const onSubmit: SubmitHandler<FormElements> = (data) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-2/3 flex-col gap-y-8 p-20"
		>
			{children}
		</form>
	);
};

export default Form;
