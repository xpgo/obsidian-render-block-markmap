
import { transform } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { IMarkmapOptions } from 'markmap-view/types/types';


// ------------------------------------------------------------
// markmap processor
// ------------------------------------------------------------

export class MarkmapProcessor {

    async run(source: string, el: HTMLElement) {
        // parser options
        var optStr = '';
        if (source.startsWith('> ')) {
            const linePos = source.indexOf('\n');
            var optStr = source.substring(2, linePos);
            source = source.substring(linePos + 1);
        }
        const options = this.parseOptions(optStr);

        // make container
        const divEl = el.createEl('div');

        // transform source code and make svg
        const { root, features } = transform(source);

        // create svg
        var svg = this.createSVG(divEl);
        const markmapSVG = Markmap.create(svg, options, root);

        // resize containing div to contain the diagram's natural height
        const height = markmapSVG.state.maxY - markmapSVG.state.minY;
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
        var lineOpt = optStr.split(' ');

        // autoFit?
        const nOpt = lineOpt.length;
        var iOpt = lineOpt.indexOf('-a');
        if (iOpt >= 0) {
            options.autoFit = true;
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
