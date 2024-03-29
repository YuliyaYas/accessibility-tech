export const hasDuplicateOrEmptyId = ($) => {
    const allEl = $('*');
    let msg = [];
    let allIds = {};
    allEl.map((_, el) => {
        if (el.attribs && el.attribs.id) {
            const id = el.attribs.id;
            if (allIds[id]) {
                allIds[id] += 1;
            } else {
                allIds[id] = 1;
            };
        };

        if (el.attribs.id === '') {
            msg.push({
                name: 'Id duplicates and/or empty',
                selector: null,
                isPassed: false,
                category: 'id_rule',
                description: 'Your element has an empty id',
                tip: 'Please remove the id attribute or add a unique id to this element',
                tag: 'id',
                html: $.html(el)
            });
        };
    });

    let duplicateIds = [];
    for (const key in allIds) {
        if (allIds[key] > 1) {
            duplicateIds.push(key);
        }
    }
    if (duplicateIds.length) {
        duplicateIds.map(id => {
            const idEl = $(`#${id}`);
            msg.push({
                name: 'Id duplicates and/or empty',
                selector: null,
                isPassed: false,
                category: 'id_rule',
                description: `Your elements have a duplicate id #${id}`,
                tip: 'ARIA IDs should be unique. Please rename the id attribute to a unique one',
                tag: 'id',
                html: $.html(idEl)
            });
        });
    };
    return msg;
}