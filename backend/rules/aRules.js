import { getSelector } from '../utils/utils.js';

export const hasAccessibleNameInATag = ($) => {
    const aTags = $('a');
    let aTagsCheck = [];
    aTags.map((_, a) => {
        if (!a.children.length) {
            const selector = getSelector(a);
            aTagsCheck.push({
                name: 'A tag accessible name',
                selector,
                isPassed: false,
                category: 'a_tag_rule',
                description: `<a> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no accessible name`,
                tip: 'Add a text content inside the <a> tag that describe the link in a meaningful way.',
                tag: 'a',
                html: $.html(a)
            })
        }
    })
    return aTagsCheck
}