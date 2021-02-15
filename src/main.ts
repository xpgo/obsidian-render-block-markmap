import {
	Plugin,
} from 'obsidian';

import { 
	DEFAULT_SETTINGS, 
	RenderBlockMarkmapSettingTab,
	RenderBlockMarkmapPluginSettings
} from './settings';

import { MarkmapProcessor } from './block-markmap'

// ------------------------------------------------------------
// RenderBlockMarkmapPlugin
// ------------------------------------------------------------

export default class RenderBlockMarkmapPlugin extends Plugin {
	settings: RenderBlockMarkmapPluginSettings;

	async onload() {
		console.log('Loading Render Block Markmap plugin');

		// load settings
		await this.loadSettings();

		// for cards rendering
		this.registerMarkdownCodeBlockProcessor('markmap', async (source, el, ctx) => {
			if (this.settings.markmapSupport) {
				await this.refreshEl(el);
				const proc = new MarkmapProcessor();
				await proc.run(source, el);
			}
		});

		// for settings
		this.addSettingTab(new RenderBlockMarkmapSettingTab(this.app, this));
	}

	onunload() {
		console.log('Unloading Render Block Markmap plugin');
	}

	async loadSettings() {
		this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async refreshEl(el: HTMLElement) {
		// prepare enviroment for markmap
		// it is very important!
		const codeBlock = el.querySelector('code.language-markmap');
		if (!codeBlock) return;
	}

}
