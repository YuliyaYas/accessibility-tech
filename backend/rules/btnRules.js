import { getSelector } from '../utils.js';

export const hasAccessibleNameInBtns = ($) => {
    const btnTags = $('button');
    let btnTagsCheck = [];
    btnTags.map((_, btn) => {
        if (!btn.children.length) {
            const selector = getSelector(btn);
            btnTagsCheck.push({
                name: 'Button Accessible name',
                selector,
                isPassed: false,
                category: 'button_rule',
                description: `<button> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no accessible name`,
                tip: 'For buttons without visible labels (text inside of the button), use the aria-label attribute to clearly describe the action to anyone using an assistive technology',
                tag: 'button',
            })
        }
    })
    return btnTagsCheck
}