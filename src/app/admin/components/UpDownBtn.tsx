import React, { useState } from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';

type UpDownBtnProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const UpDownBtn = ({ isOpen, setIsOpen }: UpDownBtnProps) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				setIsOpen(!isOpen);
			}}
			className="flex justify-center rounded-sm bg-gray-light"
		>
			{isOpen ? <GoChevronUp /> : <GoChevronDown />}
		</button>
	);
};

export default UpDownBtn;
