import Select from './Select';
import {
	useGetCategory,
	useGetCategoryChildren,
} from '@/service/useGetCategory';

const SelectBoxes = () => {
	const category1 = useGetCategory();
	const category2 = useGetCategoryChildren();
	console.log('📢[SelectBoxes.tsx:10]: category2: ', category2);
	return (
		<ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
			<Select name="category1" options={category1} />
			<Select name="category2" options={category2} />
		</ul>
	);
};

export default SelectBoxes;
