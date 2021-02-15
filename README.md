# Render Block Markmap Plugin for Obsidian

Obsidian Plugin: Render code block of markmap to embedded mindmap in preview mode.

![](https://raw.githubusercontent.com/xpgo/obsidian-render-block-markmap/master/image/render-block-markmap1.png)

## Features

- preview the code block of [markmap](https://markmap.js.org/) as mindmap
- embeded the mindmap in current note
- inline options for autofit

**NOTICE**

The plugin is different from the similar plugin [Obsidian Mind Map](https://github.com/lynchjames/obsidian-mind-map) which shows the entile note as mindmap in a seperated view and has more features. This plugin uses code block of markmap and embeds the mindmap in the note file preview. Personally, I like the embeded mode, so I released the plugin for whom also prefers the mode too.

## Inline options

- If the first line starts with `> `, the first line will be used for mind map options, for example: `> -a ` means autofit the mind map. In the future there will be more options.

## Change log

### 0.1.0

- Initial release

## Plans for future

- [ ] Add more inline options

## Install

- On the Obsidian's settings page, browse the community plugins and search 'Render Block Markmap', then install.
- Manually installing: go to the GitHub release page, copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/render-block-markmap/`.

## Build

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Support

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/xpgo)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/xpgo/obsidian-render-block-markmap?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/xpgo/obsidian-render-block-markmap/total?style=for-the-badge)
