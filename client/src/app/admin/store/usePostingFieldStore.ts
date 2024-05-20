import create from 'zustand';

type State = {
	title: string;
	categoryId: number;
};

type Action = {
	setTitle: (firstName: State['title']) => void;
	setCategoryId: (categoryId: State['categoryId']) => void;
};

const usePostingFieldStore = create<State & Action>((set) => ({
	title: '',
	categoryId: 0,
	setTitle: (title: State['title']) => set(() => ({ title })),
	setCategoryId: (categoryId: State['categoryId']) =>
		set(() => ({
			categoryId,
		})),
}));
export default usePostingFieldStore;
