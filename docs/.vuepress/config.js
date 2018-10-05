var CONST = require('./const');

module.exports = {
	title: `Jung's TIL`,
	description: 'Today I Learn',
	base: '/TIL/',
	themeConfig: {
		nav: [
			{ text: 'GitHub', link: 'https://github.com/junghanyoung' },
			{ text: 'Blog', link: 'https://junghanyoung.github.io/' }
		],
		sidebar: [
			{
				title: '2018-09',
				children: [ '2018-09/25', '2018-09/27', '2018-09/28', '2018-09/29' ]
			},
			{
				title: '2018-10',
				children: [ '2018-10/01', '2018-10/02', '2018-10/03', '2018-10/04', '2018-10/05' ]
			}
		]
	}
};
