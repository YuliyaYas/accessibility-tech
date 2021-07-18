export const hasLanguageAttribute = ( $ ) => {
    const htmlTag = $('html');
    if (htmlTag[0].attribs && htmlTag[0].attribs.lang) {
        return  {
            name: 'Language attribute',
            selector: 'html',
            isPassed: true, 
            category: 'html_rule',
            description: '<html> tag has language attribute',
            tip: 'Make sure your language attribute is changing based on user\'s language preference',
            tag: 'html',
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
        }
    } 
}