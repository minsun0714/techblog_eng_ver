const { promises } = require('fs');

type MenuData = {
	[key: string]: string[];
};

const getSideMenuData = async (): Promise<MenuData> => {
	const json = await promises
		.readFile('menu.json', 'utf-8')
		.catch(console.error);
	const menuData = await JSON.parse(json);
	return menuData;
};
export default getSideMenuData;
