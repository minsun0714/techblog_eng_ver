import Select from './Select';
import useGetCategory from '@/service/useGetCategory';

const SelectBoxes = () => {
	const category1 = useGetCategory();
	console.log(category1);
	return (
		<ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
			<Select name="category1" />
			<Select name="category2" />
		</ul>
	);
};

export default SelectBoxes;
