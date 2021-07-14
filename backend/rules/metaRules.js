// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attributes

export const hasCorrectMetaMaxViewportScale = ($) => {
    const metaTags = $('meta');
    let viewportTag = '';

    metaTags.map((i, mtag) => {
        if (mtag.attribs && mtag.attribs.name === 'viewport') {
            return viewportTag = mtag;
        }
    });

    if (viewportTag.attribs.content && viewportTag.attribs.content.includes('maximum-scale')) {
        const maxScale = viewportTag.attribs.content.split('maximum-scale=')[1].split('.');
        if (parseInt(maxScale) >= 5) {
            return {
                name: 'Meta attribute',
                selector: null,
                isPassed: true,
                category: 'meta_rule',
                description: '<meta> tag has a maximum-scale attribute of 5.0 or higher',
                tip: null,
                tag: 'meta',
            }
        } else {
            return {
                name: 'Meta attribute',
                selector: null,
                isPassed: false,
                category: 'meta_rule',
                description: '<meta> tag has a maximum-scale attribute of 5.0 or lower',
                tip: 'Make sure your <meta> tag with viewport has a maximum-scale attribute of 5.0 or higher. This allows users to zoom into a page. ',
                tag: 'meta',
            }
        }
    }
}


export const hasCorrectMetaViewportUserScale = ($) => {
    const metaTags = $('meta');
    let viewportTag = '';

    metaTags.map((i, mtag) => {
        if (mtag.attribs && mtag.attribs.name === 'viewport') {
            return viewportTag = mtag;
        }
    });

    if (viewportTag.attribs.content && viewportTag.attribs.content.includes('user-scalable')) {
        const userScale = viewportTag.attribs.content.split('user-scalable=')[1];
        console.log('userScale', userScale.substring(0,2))
        if (!userScale.substring(0,2) === 'no') {
             return  {
                name: 'Meta attribute',
                selector: null,
                isPassed: true,
                category: 'meta_rule',
                description: '<meta> tag has correct user-scalable attribute. The user will be able to zoom the text content to a size they can comprehend.',
                tip: 'Add user-scalable=yes to your viewport <meta> tag.',
                tag: 'meta',
            }
        } else {
            return  {
                name: 'Meta attribute',
                selector: null,
                isPassed: false,
                category: 'meta_rule',
                description: '<meta> tag has user-scalable attribute set to "no". The user will not be able to zoom the text content to a size they can comprehend.',
                tip: 'Add user-scalable=yes to your viewport <meta> tag.',
                tag: 'meta',
            }
        }
    } else {
        return {
            name: 'Meta attribute',
            selector: null,
            isPassed: false,
            category: 'meta_rule',
            description: '<meta> tag has no user-scalable attribute. The user will not be able to zoom the text content to a size they can comprehend.',
            tip: 'Add user-scalable=yes to your viewport <meta> tag.',
            tag: 'meta',
        }
    }
}