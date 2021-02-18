# Render Block Markmap Plugin for Obsidian

Obsidian Plugin: Render code block of markmap to embedded mind map in preview mode.

![](https://raw.githubusercontent.com/xpgo/obsidian-render-block-markmap/master/image/render-block-markmap1.png)

## Features

- preview the code block of [markmap](https://markmap.js.org/) as mind map
- embedded mind map in current note
- inline options for autofit
- support link to internal md file

**NOTICE**

The plugin is different from the similar plugin [Obsidian Mind Map](https://github.com/lynchjames/obsidian-mind-map) which shows the entire note as mind map in a separated view and has more features. This plugin uses code block of markmap and embeds the mind map in the note file preview. Personally, I like the embedded mode, so I released the plugin for whom also prefers the mode too.

## Inline options

If the first line in the code block starts with `> `, the first line will be used for mind map options. Currently, it supports the following options:

- `-a`: use this option to autofit the mind map when any node changes.
- `-vh 0.8`: adjust the view height of mind map in preview mode. The default is 1.0.

In the future there will be more options.

## Change log

### 0.1.x

- support link to internal md file (0.1.4)
- add option `-vh` (0.1.3)
- Initial release (0.1.0)

## Plans for future

- [ ] Add more inline options

## Install

- Manually installing: go to the GitHub release page, copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/render-block-markmap/`. Then enable it in the Obsidian's Community Plugin settings page.

## Build

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Support

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/xpgo)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/xpgo/obsidian-render-block-markmap?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/xpgo/obsidian-render-block-markmap/total?style=for-the-badge)
