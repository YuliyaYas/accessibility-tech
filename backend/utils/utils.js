const hasIdOrClass = (node) => {
    if (node.attribs && node.attribs.id || node.attribs && node.attribs.class){
        if (node.attribs.id) {
            return `#${node.attribs.id}`
        } else if (node.attribs.class) {
            return `.${node.attribs.class}`
        }
    } else {
        return false;
    }
} 
export const getSelector = (node, selector) => { 
    if (hasIdOrClass(node)){
        return selector = hasIdOrClass(node);
    } else {
        if (!selector) {selector = node.name}
        if (node.parent && hasIdOrClass(node.parent)){
            return hasIdOrClass(node.parent) + ` > ${selector}`;
        } else {
            if (node.parent) {
                selector = `${node.parent.name} > ` + selector;
                return getSelector(node.parent, selector);
            } else {
                return selector.replace('root > ', '');
            }
        }
    }
};
