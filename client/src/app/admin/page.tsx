'use client';

import Button from '../(common)/components/Button';
import useAuthStore from '../(common)/store/useAuthStore';
import Form from './components/Form';
import Input from './components/Input';
import Select from './components/Select';
import UpDownBtn from './components/UpDownBtn';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export type FormElements = {
	title: string;
	category1: string;
	category2: string;
};

const AdminPage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [value, setValue] = useState<string | undefined>('');

	const router = useRouter();
	const { token } = useAuthStore();

	useEffect(() => {
		if (!token) {
			router.push('/login');
		}
	}, [token, router]);

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
			<Button text="submit" />
		</Form>
	);
};

export default AdminPage;
