type InputType = {
	label: string;
	name: string;
};

const Input = ({ label, name }: InputType) => {
	return (
		<div className="flex flex-col">
			<label>{label}</label>
			<input
				className="h-10 w-72 rounded-sm border border-gray-mid-light p-3 focus:outline-gray"
				name={name}
			/>
		</div>
	);
};

export default Input;
