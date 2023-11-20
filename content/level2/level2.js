import { genereteMappings } from "../generalMappings"

export const level2Mappings = genereteMappings('desert')

export const level2Layout = [
    [
        '                ',
        '                ',
        '                ',
        '           ww   ',
        // '           55   ',
        '           55    ',
        '7888888888888889',
        '4555555555555556',
        '4555555555555556'
    ]
]

// export const level2Mappings = {
//     '7': () => [sprite('desert-tileset', { anim: 'tl' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '8': () => [sprite('desert-tileset', { anim: 'tm' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '9': () => [sprite('desert-tileset', { anim: 'tr' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '4': () => [sprite('desert-tileset', { anim: 'ml' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '5': () => [sprite('desert-tileset', { anim: 'mm' }), offscreen({hide: true})],
//     '6': () => [sprite('desert-tileset', { anim: 'mr' }), area(), offscreen({hide: true})],
// }