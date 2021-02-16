import {
    Plugin,
} from 'obsidian';

import { MarkmapProcessor } from './block-markmap'

// ------------------------------------------------------------
// RenderBlockMarkmapPlugin
// ------------------------------------------------------------

export default class RenderBlockMarkmapPlugin extends Plugin {

    async onload() {
        console.log('Loading Render Block Markmap plugin');

        // for cards rendering
        this.registerMarkdownCodeBlockProcessor('markmap', async (source, el, ctx) => {
            await this.refreshEl(el);
            const proc = new MarkmapProcessor();
            await proc.run(source, el);
        });
    }

    onunload() {
        console.log('Unloading Render Block Markmap plugin');
    }

    async refreshEl(el: HTMLElement) {
        // prepare enviroment for markmap
        // it is very important!
        const codeBlock = el.querySelector('code.language-markmap');
        if (!codeBlock) return;
    }

}
