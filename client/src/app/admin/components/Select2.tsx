import React from 'react';
import usePostingFieldStore from '@/admin/store/usePostingFieldStore';

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
	const { categoryId, setCategoryChildId } = usePostingFieldStore();
	return (
		<li className="flex w-full flex-col">
			<label className="text-gray-mid-light">{name}</label>
			<select
				className={`h-10 rounded-sm border border-gray-mid-light focus:outline-gray ${options && options.length ? 'bg-white' : 'bg-gray-light'} `}
				onChange={(e) => setCategoryChildId(Number(e.currentTarget.value))}
			>
				<option key={-1} className="text-gray-light">
					{options && options.length ? '=== 선택 ===' : ''}
				</option>
				{options?.map((option) => (
					<option key={option.id} value={categoryId > -1 ? option.id : -1}>
						{option.title}
					</option>
				))}
			</select>
		</li>
	);
};

export default Select2;
