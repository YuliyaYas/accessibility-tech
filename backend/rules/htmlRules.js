export const checkHTML = ( htmlTag ) => {
    let htmlRules = [];
    if (htmlTag.attribs) htmlRules.push(hasLanguageAttribute(htmlTag.attribs));
    console.log(htmlRules)
};

export const hasLanguageAttribute = (attribs) => {
    if (attribs.lang){
        return  {
            name: 'Language attribute',
            id: null,
            class: null,
            isPassed: true, 
            category: 'html_rule',
            description: 'html tag has language attribute',
            tip: 'Make sure your language attribute is changing based on user\'s language preference',
            tag: 'html',
        }
    } else {
        return  {
            name: 'Language attribute',
            id: null,
            class: null,
            isPassed: false, 
            category: 'html_rule',
            description: 'html tag doesn\n have language attribute',
            tip: 'Please add a language attribute - lang - to your html tag. Make sure your language attribute is changing based on user\'s language preference',
            tag: 'html',
        }
    }
}