import cheerio from'cheerio';


export const checkHTML = ( response ) => {
    const $ = cheerio.load(response);
    const htmlTag = $('html');
    let htmlRules = [];
    if (htmlTag) {
        htmlRules.push(hasLanguageAttribute(htmlTag))
    } else {
        htmlRules.push({
            name: 'Html tag',
            selector: 'html',
            isPassed: false, 
            category: 'html_rule',
            description: 'There is no <html> tag',
            tip: 'The <html> tag represents the root of an HTML document. The <html> tag is the container for all other HTML elements, except <!DOCTYPE> tag',
            tag: 'html',
        })
    }
    // console.log(htmlRules)
    return htmlRules;
};

export const hasLanguageAttribute = (htmlTag) => {
    if (htmlTag[0].attribs && htmlTag[0].attribs.lang) {
        return  {
            name: 'Language attribute',
            selector: null,
            isPassed: true, 
            category: 'html_rule',
            description: 'html tag has language attribute',
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