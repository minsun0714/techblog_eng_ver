import usePostingFieldStore from '../store/usePostingFieldStore';
import React from 'react';

type Category = {
	id: number;
	title: string;
};

type Children = {
	children: Category[];
};

type SelectType = {
	name: string;
	options: (Category & Children)[];
};

const Select2 = ({ name, options }: SelectType) => {
	const { categoryId } = usePostingFieldStore();
	return (
		<li className="flex w-full flex-col">
			<label className="text-gray-mid-light">{name}</label>
			<select
				className={`h-10 rounded-sm border border-gray-mid-light focus:outline-gray ${options.length ? 'bg-white' : 'bg-gray-light'} `}
			>
				{options?.map((option) => (
					<option key={option.id} value={categoryId > -1 ? option.id : ''}>
						{option.title}
					</option>
				))}
			</select>
		</li>
	);
};

export default Select2;
