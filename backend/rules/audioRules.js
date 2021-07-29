import { getSelector } from '../utils/utils.js';

export const hasTrackTagInAudio = ($) => {
    const audioTags = $('audio');
    let audioTagsCheck = [];
    audioTags.map((_, audio) => {
        if (audio && audio.children) {
            const selector = getSelector(audio);
            const track = audio.children.filter( (ch) =>  ch.name === 'track')
            if (!track.length){
                audioTagsCheck.push({
                    name: 'Audio elements missing track',
                    selector,
                    isPassed: false,
                    category: 'audio_rule',
                    description: `<audio> tag ${selector ? 'with selector "' + selector + '" ' : ''}has no <track> element with [kind="captions"]`,
                    tip: 'Add track tag with [kind="captions"] to the <audio> element.',
                    tag: 'audio',
                    html: $.html(audio)
                });
            } else {
                track.map(t => {
                    if(t.attribs && t.attribs.kind === 'captions'){
                        audioTagsCheck.push({
                            name: 'Audio elements missing track',
                            selector,
                            isPassed: true,
                            category: 'audio_rule',
                            description: `<audio> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element with [kind="captions"]`,
                            tip: null,
                            tag: 'audio',
                            html: $.html(audio)
                        });
                    } else {
                        audioTagsCheck.push({
                            name: 'Audio elements missing track',
                            selector,
                            isPassed: false,
                            category: 'audio_rule',
                            description: `<audio> tag ${selector ? 'with selector "' + selector + '" ' : ''}has <track> element but missing [kind="captions"]`,
                            tip: null,
                            tag: 'audio',
                            html: $.html(audio)
                        });
                    }
                })
                
            }
        }
    })
    return audioTagsCheck;
}