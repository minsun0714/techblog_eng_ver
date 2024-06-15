import { promises } from 'fs';

type MenuData = {
	[key: string]: string[];
};

const getSideMenuData = async (): Promise<MenuData> => {
	const json = await promises
		.readFile('menu.json', 'utf-8')
		.catch(console.error);

	if (!json) {
		throw new Error('메뉴 데이터를 찾는 과정에서 에러가 발생했습니다.');
	}

	const menuData = await JSON.parse(json);
	return menuData;
};
export default getSideMenuData;
