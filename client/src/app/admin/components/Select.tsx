import React from 'react';

type SelectType = {
	name: string;
};

const Select = ({ name }: SelectType) => {
	return (
		<li className="flex w-full flex-col">
			<label className="text-gray-mid-light">{name}</label>
			<select className="h-10 rounded-sm border border-gray-mid-light focus:outline-gray">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
		</li>
	);
};

export default Select;
