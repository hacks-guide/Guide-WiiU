import { en_US as localeData } from './strings'

const sidebar_troubleshooting = {
	text: localeData.troubleshooting,
	items: [
		{ text: localeData.pages["common-issues-fixes"], link: `/common-issues-fixes` },
		{ text: localeData.pages["recover-vwii-ioses-channels"], link: `/recover-vwii-ioses-channels` }
	]
}

const sidebar_extras = {
	text: localeData.extras,
	items: [
		{ text: localeData.pages["block-updates"], link: `/block-updates` },
		{ text: localeData.pages["unblock-updates"], link: `/unblock-updates` },
		{ text: localeData.pages["dump-games"], link: `/dump-games` },
		{ text: localeData.pages["uninstall-cbhc"], link: `/uninstall-cbhc` },
		{ text: localeData.pages["uninstall-indexiine"], link: `/uninstall-indexiine` },
		{ text: localeData.pages["uninstall-payloadloader"], link: `/uninstall-payloadloader` }
	]
}

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["about"], link: `/about` },
		{ text: localeData.pages["donations"], link: `/donations` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["faq"], link: `/faq` },
		sidebar_troubleshooting,
		sidebar_extras
	],
	sidebar: {
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["aroma/getting-started"], link: `/aroma/getting-started` },
					{ text: localeData.pages["aroma/sd-preparation"], link: `/aroma/sd-preparation` },
					{ text: localeData.pages["aroma/browser-exploit"], link: `/aroma/browser-exploit` },
					{ text: localeData.pages["aroma/nand-backup"], link: `/aroma/nand-backup` },
					{ text: localeData.pages["aroma/installing-payloadloader"], link: `/aroma/installing-payloadloader` },
					{ text: localeData.pages["aroma/autobooting"], link: `/aroma/autobooting` },
					{ text: localeData.pages["finalizing-setup"], link: `/aroma/finalizing-setup` }
				]
			},
			sidebar_troubleshooting,
			sidebar_extras,
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["about"], link: `/about` },
			{ text: localeData.pages["donations"], link: `/donations` },
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` }
		]
	}
};

export default {
	lang: "en",
	label: "English",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
