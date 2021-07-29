import { getSelector } from '../utils/utils.js';

export const hasTrackTagInVideo = ($) => {
    const videoTags = $('video');
    let videoTagsCheck = [];
    // videoTags.map((_, video) => {
    //     if (video && video.children) {
    //         const selector = getSelector(video);
    //         const track = video.children.filter( (ch) =>  ch.name === 'track')
    //         if (!track.length){
    //             videoTagsCheck.push({
    //                 name: 'video elements missing track',
    //                 selector,
    //                 isPassed: false,
    //                 category: 'video_rule',
    //                 description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no <track> element with [kind="captions"]`,
    //                 tip: 'Add track tag with [kind="captions"] to the <video> element.',
    //                 tag: 'video',
    //                 html: $.html(video)
    //             });
    //         } else {
    //             track.map(t => {
    //                 if(t.attribs && t.attribs.kind === 'captions'){
    //                     videoTagsCheck.push({
    //                         name: 'video elements missing track',
    //                         selector,
    //                         isPassed: true,
    //                         category: 'video_rule',
    //                         description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element with [kind="captions"]`,
    //                         tip: null,
    //                         tag: 'video',
    //                         html: $.html(video)
    //                     });
    //                 } else {
    //                     videoTagsCheck.push({
    //                         name: 'video elements missing track',
    //                         selector,
    //                         isPassed: false,
    //                         category: 'video_rule',
    //                         description: `<video> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element but missing [kind="captions"]`,
    //                         tip: null,
    //                         tag: 'video',
    //                         html: $.html(video)
    //                     });
    //                 }
    //             })
                
    //         }
    //     }
    // })
    // console.log(videoTagsCheck)
    return videoTagsCheck;
}