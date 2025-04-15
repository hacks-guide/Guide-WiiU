import { de_DE as localeData } from './strings'

const locale = "de_DE";

const sidebar_troubleshooting = {
	text: localeData.troubleshooting,
	items: [
		{ text: localeData.pages["common-issues-fixes"], link: `/${locale}/common-issues-fixes` },
		{ text: localeData.pages["recover-vwii-ioses-channels"], link: `/${locale}/recover-vwii-ioses-channels` }
	]
}

const sidebar_extras = {
	text: localeData.extras,
	items: [
		{ text: localeData.pages["block-updates"], link: `/${locale}/block-updates` },
		{ text: localeData.pages["unblock-updates"], link: `/${locale}/unblock-updates` },
		{ text: localeData.pages["dump-games"], link: `/${locale}/dump-games` },
		{ text: localeData.pages["uninstall-cbhc"], link: `/${locale}/uninstall-cbhc` },
		{ text: localeData.pages["uninstall-indexiine"], link: `/${locale}/uninstall-indexiine` },
		{ text: localeData.pages["uninstall-payloadloader"], link: `/${locale}/uninstall-payloadloader` }
	]
}

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["about"], link: `/${locale}/about` },
		{ text: localeData.pages["donations"], link: `/${locale}/donations` },
		{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` }
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
		{ text: localeData.pages["faq"], link: `/${locale}/faq` },
		sidebar_troubleshooting,
		sidebar_extras
	],
	sidebar: {
		/*
		 	The `/${locale}/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/${locale}/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["aroma/getting-started"], link: `/${locale}/aroma/getting-started` },
					{ text: localeData.pages["aroma/sd-preparation"], link: `/${locale}/aroma/sd-preparation` },
					{ text: localeData.pages["aroma/browser-exploit"], link: `/${locale}/aroma/browser-exploit` },
					{ text: localeData.pages["aroma/nand-backup"], link: `/${locale}/aroma/nand-backup` },
					{ text: localeData.pages["aroma/installing-payloadloader"], link: `/${locale}/aroma/installing-payloadloader` },
					{ text: localeData.pages["aroma/autobooting"], link: `/${locale}/aroma/autobooting` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/aroma/finalizing-setup` }
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
			{ text: localeData.pages["about"], link: `/${locale}/about` },
			{ text: localeData.pages["donations"], link: `/${locale}/donations` },
			{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` }
		]
	}
};

export default {
	lang: "de",
	label: "Deutsche",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
