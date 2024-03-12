import React, { forwardRef, InputHTMLAttributes } from 'react';

const Input = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	return (
		<div>
			<label className="text-gray-mid-light">title</label>
			<input
				{...props}
				ref={ref}
				className="h-10 w-full rounded-sm border border-gray-mid-light p-3 focus:outline-gray"
			/>
		</div>
	);
});

export default Input;
