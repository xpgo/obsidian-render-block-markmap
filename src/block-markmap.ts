
import { transform } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { IMarkmapOptions } from 'markmap-view/types/types';


// ------------------------------------------------------------
// markmap processor
// ------------------------------------------------------------

export class MarkmapProcessor {
	viewHeight: number;

	constructor() {
        this.viewHeight = 1.0;
	}

    async run(source: string, el: HTMLElement) {
        // parser options
        let optStr = '';
        if (source.startsWith('> ')) {
            const linePos = source.indexOf('\n');
            optStr = source.substring(2, linePos);
            source = source.substring(linePos + 1);
        }
        const options = this.parseOptions(optStr);

        // make container
        const divEl = el.createEl('div');

        // transform source code and make svg
        const { root, features } = transform(source);

        // create svg
        let svg = this.createSVG(divEl);
        const markmapSVG = Markmap.create(svg, options, root);

        // resize containing div to contain the diagram's natural height
        const height = this.viewHeight * (markmapSVG.state.maxY - markmapSVG.state.minY);
        svg.style.height = `${height}px`;

        // zoom to fit (which should do nothing here?)
        markmapSVG.fit();
    }

    parseOptions(optStr: string) {
        const options: IMarkmapOptions = {
            autoFit: false,
            duration: 10,
            nodeMinHeight: 16,
            spacingVertical: 5,
            spacingHorizontal: 80,
            paddingX: 8
        };

        // parser
        let lineOpt = optStr.split(' ');

        // autoFit?
        const nOpt = lineOpt.length;
        let iOpt = lineOpt.indexOf('-a');
        if (iOpt >= 0) {
            options.autoFit = true;
        }

        // view height
        iOpt = lineOpt.indexOf('-vh');
        if (iOpt >= 0 && (iOpt+1 < nOpt)) {
            this.viewHeight = +(lineOpt[iOpt+1]);
            if (this.viewHeight <= 0.0) {
                this.viewHeight = 0.1;
            }
        }

        // return
        return options;
    }

    createSVG(container: HTMLElement): SVGElement {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as unknown as SVGElement;
        svg.setAttr('style', 'height: 100%; width: 100%;');
        container.appendChild(svg);
        return svg;
    }
}
