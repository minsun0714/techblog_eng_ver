import React from 'react';

type ButtonType = {
	text: string;
};

const Button = ({ text }: ButtonType) => {
	return (
		<div className="flex justify-center">
			<button className="h-16 w-60 rounded-md bg-gray text-white">
				{text}
			</button>
		</div>
	);
};

export default Button;
