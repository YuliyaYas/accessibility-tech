import { getSelector } from '../utils/utils.js';

export const hasNoAltTagInInputWithTypeImage = ($) => {
    const inputTags = $('input');
    let inputTagsCheck = [];
    let areAnyCorrectInputsWithImageType = false;
    inputTags.map((_, input) => {
        if (input.attribs.type && input.attribs.type === 'image') {
            if (!input.attribs.alt && !input.attribs['aria-label']) {
            const selector = getSelector(input);
            inputTagsCheck.push({
                name: 'Input of type image has [alt] attribute',
                selector,
                isPassed: false,
                category: 'input_rule',
                description: `<input> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no [alt] attribute`,
                tip: 'For <input> tags with type of image, include the [alt] attribute: <input type="image" alt="image-description">',
                tag: 'input',
                html: $.html(input)
            })
            } else { areAnyCorrectInputsWithImageType = true;}
        }
    })

    if (areAnyCorrectInputsWithImageType && !inputTagsCheck.length) {
        return {
            name: 'Input of type image has [alt] attribute',
            selector: 'input',
            isPassed: true,
            category: 'input_rule',
            description: `All <input> tags with type of image have correct attribute to describe it`,
            tip: 'You can use [alt] or [aria-label] attributes',
            tag: 'input',
            html: null,
        }
    } else return inputTagsCheck;
}