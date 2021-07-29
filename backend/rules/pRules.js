import { getSelector } from '../utils/utils.js';

export const hasTabIndexInPTag = ($) => {
    const pTags = $('p');
    let pTagsCheck = [];
    pTags.map((_, p) => {
        if (p.attribs && p.attribs.tabindex) {
            const selector = getSelector(p);
            pTagsCheck.push({
                name: 'P attribute',
                selector,
                isPassed: false,
                category: 'p_rule',
                description: `<p> tag ${selector ? 'with selector "'+selector+ '" ' : ''}has a tabindex attribute`,
                tip: 'Please remove tabindex attribute from the <p> tag. Text is not meant to be navigated with a tab key',
                tag: 'html',
                html: $.html(p)
            })
        }
    })

    //TODO: add rule for p tags with children. P tag should have no children
    return pTagsCheck
}