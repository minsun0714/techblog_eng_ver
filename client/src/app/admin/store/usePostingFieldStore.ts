import create from 'zustand';

type State = {
	title: string;
	categoryId: number;
	categoryChildId: number;
	content: string | undefined;
};

type Action = {
	setTitle: (firstName: State['title']) => void;
	setCategoryId: (categoryId: State['categoryId']) => void;
	setCategoryChildId: (categoryChildId: State['categoryChildId']) => void;
	setContent: (content: State['content'] | undefined) => void;
};

const usePostingFieldStore = create<State & Action>((set) => ({
	title: '',
	categoryId: -1,
	categoryChildId: -1,
	content: '',
	setTitle: (title: State['title']) => set(() => ({ title })),
	setCategoryId: (categoryId: State['categoryId']) =>
		set(() => ({
			categoryId,
		})),
	setCategoryChildId: (categoryChildId: State['categoryChildId']) =>
		set(() => ({
			categoryChildId,
		})),
	setContent: (content: State['content']) => set(() => ({ content })),
}));
export default usePostingFieldStore;
