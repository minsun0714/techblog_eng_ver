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
	setCategoryId: (categoryId: number) => void;
};

const Select1 = ({ name, options, setCategoryId }: SelectType) => {
	return (
		<li className="flex w-full flex-col">
			<label className="text-gray-mid-light">{name}</label>
			<select
				className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray"
				onChange={(e) => setCategoryId(Number(e.currentTarget.value))}
			>
				<option value={-1} key={-1} className="text-gray-light">
					=== 선택 ===
				</option>
				{options?.map((option) => (
					<option key={option.id} value={option.id}>
						{option.title}
					</option>
				))}
			</select>
		</li>
	);
};

export default Select1;
