'use client';

import Input from '../(common)/components/Input';
import Button from './components/Button';
import Form from './components/Form';
import Select from './components/Select';
import UpDownBtn from './components/UpDownBtn';
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export type FormElements = {
	title: string;
	category1: string;
	category2: string;
};

const AdminPage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [value, setValue] = useState<string | undefined>('');

	return (
		<Form>
			{isOpen && (
				<>
					<Input />
					<ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
						<Select name="category1" />
						<Select name="category2" />
					</ul>
					<MDEditor value={value} onChange={setValue} />
				</>
			)}
			<UpDownBtn isOpen={isOpen} setIsOpen={setIsOpen} />
			<MDEditor.Markdown
				source={value}
				style={{ overflowY: 'scroll', height: '85vh' }}
			/>
			<Button />
		</Form>
	);
};

export default AdminPage;
