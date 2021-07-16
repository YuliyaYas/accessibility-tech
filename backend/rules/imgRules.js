export const hasAltAttrInImg = ($) => {
    const imgs = $('img');
    let imgCheck = [];
    imgs.map((_, img) => {
        if (!img.attribs || img.attribs && !img.attribs.alt || img.attribs && img.attribs.alt === '') {
            let selector =''
            if (img.attribs && img.attribs.id){
                selector = `#${img.attribs.id}`
            } else if (img.attribs && img.attribs.class){
                selector = `.${img.attribs.class}`
            };
            imgCheck.push({
                name: 'Image attribute',
                selector,
                isPassed: false,
                category: 'img_rule',
                description: `<img> tag ${selector ? 'with selector '+selector+ ' ' : ''}has no alt attribute`,
                tip: 'Make sure to add alt attribute to <img> tags',
                tag: 'html',
            })
        }
    })

    if (!imgCheck.length) {
        return [{
            name: 'Image attribute',
            selector: null,
            isPassed: true,
            category: 'img_rule',
            description: 'All images have alt attribute',
            tip: null,
            tag: 'html',
        }]
    } else {
        return imgCheck;
    }
}