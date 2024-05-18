import create from 'zustand';

type State = {
	title: string;
};

type Action = {
	setTitle: (firstName: State['title']) => void;
};

const usePostingFieldStore = create<State & Action>((set) => ({
	title: '',
	setTitle: (title: State['title']) => set(() => ({ title })),
}));
export default usePostingFieldStore;
