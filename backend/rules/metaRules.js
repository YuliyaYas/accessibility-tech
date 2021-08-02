export const hasCorrectMetaMaxViewportScale = ($) => {
    const metaTags = $('meta');
    let viewportTag = '';

    metaTags.map((_, mtag) => {
        if (mtag.attribs && mtag.attribs.name === 'viewport') {
            return viewportTag = mtag;
        }
    });

    if (viewportTag.attribs.content && viewportTag.attribs.content.includes('maximum-scale')) {
        const maxScale = viewportTag.attribs.content.split('maximum-scale=')[1].split('.');
        if (parseInt(maxScale) >= 5) {
            return {
                name: 'Meta attribute',
                selector: 'meta',
                isPassed: true,
                category: 'meta_rule',
                description: '<meta> tag has a maximum-scale attribute of 5.0 or higher',
                tip: null,
                tag: 'meta',
                html: $.html(viewportTag)
            }
        } else {
            return {
                name: 'Meta attribute',
                selector: 'meta',
                isPassed: false,
                category: 'meta_rule',
                description: '<meta> tag has a maximum-scale attribute of 5.0 or lower',
                tip: 'Make sure your <meta> tag with viewport has a maximum-scale attribute of 5.0 or higher. This allows users to zoom into a page. ',
                tag: 'meta',
                html: $.html(viewportTag)
            }
        }
    }
}

export const hasCorrectMetaViewportUserScale = ($) => {
    const metaTags = $('meta');
    let viewportTag = '';

    metaTags.map((_, mtag) => {
        if (mtag.attribs && mtag.attribs.name === 'viewport') {
            return viewportTag = mtag;
        }
    });

    if (viewportTag.attribs.content && viewportTag.attribs.content.includes('user-scalable')) {
        const userScale = viewportTag.attribs.content.split('user-scalable=')[1];
        if (userScale.substring(0,2) !== 'no') {
             return  {
                name: 'Meta attribute',
                selector: 'meta',
                isPassed: true,
                category: 'meta_rule',
                description: '<meta> tag has correct user-scalable attribute. The user will be able to zoom the text content to a size they can comprehend.',
                tip: null,
                tag: 'meta',
                html: $.html(viewportTag),
            }
        } else {
            return  {
                name: 'Meta attribute',
                selector: 'meta',
                isPassed: false,
                category: 'meta_rule',
                description: '<meta> tag has user-scalable attribute set to "no". The user will not be able to zoom the text content to a size they can comprehend.',
                tip: 'Add user-scalable=yes to your viewport <meta> tag.',
                tag: 'meta',
                html: $.html(viewportTag)
            }
        }
    } else {
        return {
            name: 'Meta attribute',
            selector: 'meta',
            isPassed: false,
            category: 'meta_rule',
            description: '<meta> tag has no user-scalable attribute. The user will not be able to zoom the text content to a size they can comprehend.',
            tip: 'Add user-scalable=yes to your viewport <meta> tag.',
            tag: 'meta',
            html: $.html(viewportTag)
        }
    }
}


export const hasCorrectParentElforMeta = ($) => {
    const metaTags = $('meta');
    let isParentHeadTag = true;
    metaTags.map((_, mtag) => {
        if (mtag.parent.name !== 'head') {
            isParentHeadTag = false;
        }
    });
    if (!isParentHeadTag) {
        return {
            name: 'Meta attribute',
            selector: 'meta',
            isPassed: false,
            category: 'meta_rule',
            description: `<meta> tag${metaTags.length > 1 ? "s have" : ' has'} no <head> parent attribute.`,
            tip: '<meta> tags always go inside the <head> element',
            tag: 'meta',
            html: null,
        }
    }
};

export const hasRefreshInMetaTag = ($) => {
    const metaTags = $('meta');
    let hasHttpEquivRefreshMeta = null;
    metaTags.map((_, meta) => {
        if (meta.attribs && meta.attribs['http-equiv'] && meta.attribs['http-equiv'] === 'refresh'){
            hasHttpEquivRefreshMeta = meta;
        }
    })

    if (!hasHttpEquivRefreshMeta) {
        return {
            name: 'Meta attribute',
            selector: 'meta',
            isPassed: true,
            category: 'meta_rule',
            description: "<meta> tag does not include http-equiv=[refresh]",
            tip: null,
            tag: 'meta',
            html: null,
        }
    } else if (hasHttpEquivRefreshMeta){
        return {
            name: 'Meta attribute',
            selector: 'meta',
            isPassed: false,
            category: 'meta_rule',
            description: "<meta> tag should not have refresh value",
            tip: 'Remove http-equiv=[refresh] from meta tag and use JavaScript instead to refresh a page',
            tag: 'meta',
            html: $.html(hasHttpEquivRefreshMeta),
        }
    }
}
