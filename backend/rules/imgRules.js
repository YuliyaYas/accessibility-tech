import { getSelector } from '../utils.js';

export const hasAltAttrInImg = ($) => {
    const imgs = $('img');
    let imgCheck = [];
    imgs.map((_, img) => {
        if (!img.attribs || img.attribs && !img.attribs.alt || img.attribs && img.attribs.alt === '') {
            const selector = getSelector(img);
            imgCheck.push({
                name: 'Image attribute',
                selector,
                isPassed: false,
                category: 'img_rule',
                description: `<img> tag ${selector ? 'with selector "'+selector+ '" ' : ''}has no alt attribute`,
                tip: 'Make sure to add alt attribute to <img> tags',
                tag: 'html',
                html: $.html(img)
            })
        }
    })

    if (!imgCheck.length) {
        return [{
            name: 'Image attribute',
            selector: 'img',
            isPassed: true,
            category: 'img_rule',
            description: 'All images have alt attribute',
            tip: null,
            tag: 'html',
            html: null,
        }]
    } else {
        return imgCheck;
    }
}