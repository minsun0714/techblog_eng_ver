import usePostingFieldStore from '../store/store';
import React from 'react';

const Input = () => {
	const { title, setTitle } = usePostingFieldStore();

	return (
		<div>
			<label className="text-gray-mid-light">title</label>
			<input
				value={title}
				onChange={(e) => setTitle(e.currentTarget.value)}
				className="h-10 w-full rounded-sm border border-gray-mid-light p-3 focus:outline-gray"
			/>
		</div>
	);
};

export default Input;
