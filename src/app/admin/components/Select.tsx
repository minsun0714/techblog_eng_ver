import { FormElements } from '../page';
import React, { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';

type SelectProps = {
	name: 'category1' | 'category2';
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	(props, ref) => {
		return (
			<li className="flex w-full flex-col">
				<label className="text-gray-mid-light">{props.name}</label>
				<select
					{...props}
					ref={ref}
					className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray"
				/>
			</li>
		);
	},
);

export default Select;
