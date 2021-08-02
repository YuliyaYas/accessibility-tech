import { getSelector } from '../utils/utils.js';

export const hasTrackTagWithCaptionsInVideo = ($) => {
    const videoTags = $('video');
    let videoTagsCheck = [];
    videoTags.map((_, video) => {
        if (video && video.children) {
            const selector = getSelector(video);
            const track = video.children.filter((ch) => ch.name === 'track');
            const hasAnyCaptions = track.filter(t => t.attribs && t.attribs.kind === 'captions').length

            if (!track.length || !hasAnyCaptions) {
                videoTagsCheck.push({
                    name: 'video elements missing track',
                    selector,
                    isPassed: false,
                    category: 'video_rule',
                    description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no <track> element with [kind="captions"]`,
                    tip: 'Add track tag with [kind="captions"] to the <video> element.',
                    tag: 'video',
                    html: $.html(video)
                });
            } else if (hasAnyCaptions) {
                videoTagsCheck.push({
                    name: 'video elements missing track',
                    selector,
                    isPassed: true,
                    category: 'video_rule',
                    description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element with [kind="captions"]`,
                    tip: null,
                    tag: 'video',
                    html: $.html(video)
                });

            }
        }
    })
    return videoTagsCheck;
}

export const hasTrackTagWithDescriptionInVideo = ($) => {
    const videoTags = $('video');
    let videoTagsCheck = [];
    videoTags.map((_, video) => {
        if (video && video.children) {
            const selector = getSelector(video);
            const track = video.children.filter((ch) => ch.name === 'track');
            const hasAnyDescription= track.filter(t => t.attribs && t.attribs.kind === 'descriptions').length

            if (!track.length || !hasAnyDescription) {
                videoTagsCheck.push({
                    name: 'video elements missing track',
                    selector,
                    isPassed: false,
                    category: 'video_rule',
                    description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no <track> element with [kind="descriptions"]`,
                    tip: 'Add track tag with [kind="descriptions"] to the <video> element.',
                    tag: 'video',
                    html: $.html(video)
                });
            } else if (hasAnyDescription) {
                videoTagsCheck.push({
                    name: 'video elements missing track',
                    selector,
                    isPassed: true,
                    category: 'video_rule',
                    description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element with [kind="descriptions"]`,
                    tip: null,
                    tag: 'video',
                    html: $.html(video)
                });

            }
        }
    })
    return videoTagsCheck;
}