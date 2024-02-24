const { promises } = require('fs');

const getSideMenuData = async () => {
	const json = await promises
		.readFile('menu.json', 'utf-8')
		.catch(console.error);
	const menuData = await JSON.parse(json);
	return menuData;
};
export default getSideMenuData;
