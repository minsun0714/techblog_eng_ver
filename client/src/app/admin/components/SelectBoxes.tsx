import { useEffect } from 'react';
import Select1 from '@/admin/components/Select1';
import Select2 from '@/admin/components/Select2';
import usePostingFieldStore from '@/admin/store/usePostingFieldStore';
import {
	useGetCategory,
	useGetCategoryChildren,
} from '@/service/useGetCategory';

const SelectBoxes = () => {
	const { data: category1 } = useGetCategory();

	const { categoryId, setCategoryId } = usePostingFieldStore();

	const { data: category2, mutate } = useGetCategoryChildren(categoryId);

	useEffect(() => {
		mutate();
	}, [categoryId, mutate]);

	return (
		<ul className="flex w-full flex-row gap-x-12 focus:outline-gray">
			<Select1
				name="category1"
				options={category1}
				setCategoryId={setCategoryId}
			/>
			<Select2 name="category2" options={category2} />
		</ul>
	);
};

export default SelectBoxes;
