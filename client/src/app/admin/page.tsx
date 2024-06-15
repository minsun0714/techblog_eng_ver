'use client';

import Button from '../(common)/components/Button';
import useAuthStore from '../(common)/store/useAuthStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Form } from '@/(common)/components/Form';
import Input from '@/admin/components/Input';
import SelectBoxes from '@/admin/components/SelectBoxes';
import UpDownBtn from '@/admin/components/UpDownBtn';
import usePostingFieldStore from '@/admin/store/usePostingFieldStore';
import MDEditor from '@uiw/react-md-editor';

const AdminPage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { content, setContent } = usePostingFieldStore();

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
					<SelectBoxes />
					<MDEditor value={content} onChange={setContent} />
				</>
			)}
			<UpDownBtn isOpen={isOpen} setIsOpen={setIsOpen} />
			<MDEditor.Markdown
				source={content}
				style={{ overflowY: 'scroll', height: '85vh' }}
			/>
			<Button text="submit" />
		</Form>
	);
};

export default AdminPage;
