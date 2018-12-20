var CONST = require('./const');

module.exports = {
	title: `Jung's TIL`,
	description: 'Today I Learn',
	plugins: [ '@vuepress/plugin-back-to-top' ],
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
				children: [
					'2018-10/01',
					'2018-10/02',
					'2018-10/03',
					'2018-10/04',
					'2018-10/05',
					'2018-10/07',
					'2018-10/08',
					'2018-10/09',
					'2018-10/11',
					'2018-10/16',
					'2018-10/17',
					'2018-10/18',
					'2018-10/28'
				]
			},
			{
				title: '2018-12',
				children: [ '2018-12/19', '2018-12/20' ]
			}
		]
	},
	markdown: {
		toc: {
			includeLevel: [ 2, 3, 4 ]
		},
		lineNumbers: true
	}
};
