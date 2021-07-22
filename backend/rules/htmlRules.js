import { langCodes, countryCodes } from "../utils/constants.js";

const isLangLegit = (lang) => {
    if (lang === 'zh-Hans' || lang ==='zh-Hant') {
        return true
    } else if (lang.includes('-')){
        const langCode = lang.split('-')[0];
        const countryCode = lang.split('-')[1];
        return langCodes.includes(langCode) && countryCodes.includes(countryCode)
    } else {
        return langCodes.includes(lang)
    }
}

export const hasLanguageAttribute = ( $ ) => {
    const htmlTag = $('html');
    if (htmlTag[0].attribs && htmlTag[0].attribs.lang) {
        if(isLangLegit(htmlTag[0].attribs.lang)){
            return  {
                name: 'Language attribute',
                selector: 'html',
                isPassed: true, 
                category: 'html_rule',
                description: '<html> tag has correct language attribute',
                tip: 'Make sure your language [lang] attribute is changing based on user\'s language preference',
                tag: 'html',
                html: null,
            }
        } else {
            return  {
                name: 'Language attribute',
                selector: 'html',
                isPassed: false, 
                category: 'html_rule',
                description: `<html> tag has invalid value "${htmlTag[0].attribs.lang}" for its language [lang] attribute`,
                tip: 'Make sure your language attribute is changing based on user\'s language preference',
                tag: 'html',
                html: $.html(htmlTag),
            }
        }
    } else {
        return  {
            name: 'Language attribute',
            selector: null,
            isPassed: false, 
            category: 'html_rule',
            description: 'html tag doesn\n have language attribute',
            tip: 'Please add a language attribute - lang - to your html tag. Make sure your language attribute is changing based on user\'s language preference',
            tag: 'html',
            html: $.html(htmlTag),
        }
    } 
}
