'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoChevronUp } from 'react-icons/go';
import { GoChevronDown } from 'react-icons/go';
import MDEditor from '@uiw/react-md-editor';

type FormElements = {
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
					<div>
						<label className="text-gray-mid-light">title</label>
						<input
							{...register('title', { required: true })}
							className="h-10 w-full rounded-sm border border-gray-mid-light p-3
			focus:outline-gray
			"
						/>
					</div>
					<ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
						<li className="flex w-full flex-col">
							<label className="text-gray-mid-light">category 1</label>
							<input
								{...register('category1', { required: true })}
								className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray"
							/>
						</li>
						<li className="flex w-full flex-col">
							<label className="text-gray-mid-light">category 2</label>
							<input
								{...register('category2', { required: true })}
								className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray"
							/>
						</li>
					</ul>
					<MDEditor value={value} onChange={setValue} />
				</>
			)}
			<button
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
				className="flex justify-center rounded-sm bg-gray-light"
			>
				{isOpen ? <GoChevronUp /> : <GoChevronDown />}
			</button>
			<MDEditor.Markdown
				source={value}
				style={{ overflowY: 'scroll', height: '85vh' }}
			/>
			<div className="flex justify-center">
				<button className="h-16 w-60 rounded-md bg-gray text-white">
					submit
				</button>
			</div>
		</form>
	);
};

export default AdminPage;
