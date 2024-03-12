'use client';

import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import UpDownBtn from './components/UpDownBtn';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';

export type FormElements = {
	title: string;
	category1: string;
	category2: string;
};

const AdminPage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [value, setValue] = useState<string | undefined>('');

	const { register, handleSubmit } = useForm<FormElements>();

	const onSubmit: SubmitHandler<FormElements> = (data) => console.log(data);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-2/3 flex-col gap-y-8 p-20"
		>
			{isOpen && (
				<>
					<Input {...register('title')} />
					{/* <ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
						<Select register={register} name="category1" />
						<Select register={register} name="category2" />
					</ul> */}
					<MDEditor value={value} onChange={setValue} />
				</>
			)}
			<UpDownBtn isOpen={isOpen} setIsOpen={setIsOpen} />
			<MDEditor.Markdown
				source={value}
				style={{ overflowY: 'scroll', height: '85vh' }}
			/>
			<Button />
		</form>
	);
};

export default AdminPage;
