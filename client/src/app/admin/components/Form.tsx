import usePostingFieldStore from '../store/usePostingFieldStore';

const Form = ({ children }: { children: React.ReactNode }) => {
	const { title, categoryId, categoryChildId, content } =
		usePostingFieldStore();
	console.log('📢[Form.tsx:5]: setCategoryChildId: ', categoryChildId);
	console.log('📢[Form.tsx:5]: categoryId: ', categoryId);
	console.log('📢[Form.tsx:5]: title: ', title);
	console.log('📢[Form.tsx:5]: content: ', content);
	return <form className="flex w-2/3 flex-col gap-y-8 p-20">{children}</form>;
};

export default Form;
