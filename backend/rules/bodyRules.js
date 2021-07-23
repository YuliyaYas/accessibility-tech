export const hasAriaHiddenInABodyTag = ($) => {
    const bodyTag = $('body');
    if (bodyTag[0].attribs && bodyTag[0].attribs["aria-hidden"] === 'true'){
        return {
            name: 'Body tag aria-hidden',
            selector: 'body',
            isPassed: false,
            category: 'body_rule',
            description: `<body> tag has aria-hidden set to true`,
            tip: 'Either remove the ["aria-hidden"] attribute from the <body> tag altogether or set it to false',
            tag: 'body',
            html: $.html(bodyTag)
        }
    } else {
        return {
            name: 'Body tag aria-hidden',
            selector: 'body',
            isPassed: true,
            category: 'body_rule',
            description: '<body> tag doesn\'t have an [aria-hidden] attribute set to true',
            tip: null,
            tag: 'body',
            html: $.html(bodyTag)
        }
    }
}