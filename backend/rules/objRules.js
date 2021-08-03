import { getSelector } from '../utils/utils.js';

export const hasAccessibleNameInObjects = ($) => {
    const objTags = $('object');
    let objTagsCheck = [];
    objTags.map((_, obj) => {
        if (obj && !obj.attribs.alt) {
            const selector = getSelector(obj);
            objTagsCheck.push({
                name: 'Object Accessible name',
                selector,
                isPassed: false,
                category: 'object_rule',
                description: `<object> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no accessible name`,
                tip: 'For object use alt attribute to clearly describe the alternative text',
                tag: 'object',
                html: $.html(obj)
            })
        }
    })
    
    if (objTags.length && !objTagsCheck.length){
        return [{
            name: 'Object Accessible name',
            selector: 'object',
            isPassed: true,
            category: 'object_rule',
            description: `all <object> tags have accessible name`,
            tip: null,
            tag: 'object',
            html: null
        }]
    } else return objTagsCheck;
}