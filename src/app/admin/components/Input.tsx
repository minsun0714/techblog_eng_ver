import { FormElements } from '../page';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type InputProps = {
	register: UseFormRegister<FormElements>;
};

const Input = ({ register }: InputProps) => {
	return (
		<div>
			<label className="text-gray-mid-light">title</label>
			<input
				{...register('title', { required: true })}
				className="h-10 w-full rounded-sm border border-gray-mid-light p-3 focus:outline-gray"
			/>
		</div>
	);
};

export default Input;
