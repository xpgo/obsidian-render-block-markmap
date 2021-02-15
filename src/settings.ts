import {
    App,
    PluginSettingTab,
    Setting,
} from 'obsidian';

import RenderBlockMarkmapPlugin from './main';

// ------------------------------------------------------------
// Settings
// ------------------------------------------------------------

export interface RenderBlockMarkmapPluginSettings {
    markmapSupport: boolean;
}

export const DEFAULT_SETTINGS: RenderBlockMarkmapPluginSettings = {
    markmapSupport: true,
}


// ------------------------------------------------------------
// Settings Tab
// ------------------------------------------------------------

export class RenderBlockMarkmapSettingTab extends PluginSettingTab {
	plugin: RenderBlockMarkmapPlugin;

	constructor(app: App, plugin: RenderBlockMarkmapPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let { containerEl } = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Render Block Markmap Plugin - Settings.' });

		new Setting(containerEl)
			.setName('Enable Markmap')
			.setDesc('Enable Rendering markmap code block.')
			.addToggle((toggle) => {
				toggle.setValue(this.plugin.settings.markmapSupport);
				toggle.onChange(async (value) => {
					this.plugin.settings.markmapSupport = value;
					await this.plugin.saveSettings();
				});
			});
	}
}
