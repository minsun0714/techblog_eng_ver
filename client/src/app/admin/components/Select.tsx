import { FormElements } from '../page';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type SelectProps = {
	register: UseFormRegister<FormElements>;
	name: 'category1' | 'category2';
};

const Select = ({ register, name }: SelectProps) => {
	return (
		<li className="flex w-full flex-col">
			<label className="text-gray-mid-light">{name}</label>
			<select
				{...register(name, { required: true })}
				className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray"
			/>
		</li>
	);
};

export default Select;
