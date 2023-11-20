import { genereteMappings } from "../generalMappings"

export const level1Mappings = genereteMappings('city')

export const level1Layout = [
    [
        "                          @                                                                                                       ",
        "                         www                                                                                                      ",
        "                         555                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
        "                         222                                                                                                      ",
    ],
    [
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                             @                   @@                                                                               ",
        "                           www                  wwww                                             @@                               ",
        "                           555                  5555                                    wwwwwiooooooooopwwwwww                    ",
        "                        @  222                  2222                             @      55555           555555                    ",
        "                       www 222                  2222  wwww                     wwww     22222           222222                    ",
        "                       555 222                  2222  5555                     5555     22222           222222                   @",
        "                       222 222                  2222  2222         @           2222     22222           222222     @              ",
        "            788888888888888888888889iooop7888888888888888888888888iooop7888888888888888888889           7888888888888888889       ",
        "            455555555555555555555556     4555555555555555555555555     4555555555555555555556           4555555555555555556       ",
        "            122222222222222222222223     1222222222222222222222222     3222222222222222222223           1222222222222222223       ",
        "            122222222222222222222223     1222222222222222222222222     3222222222222222222223           1222222222222222223       ",
        "            122222222222222222222223     1222222222222222222222222     3222222222222222222223           1222222222222222223       ",
    ],
    [
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                                                                                                                                  ",
        "                                                                                                             wwww                 ",
        "                                                                                                             5555                 ",
        "                                                       @@                                @@               @@ 2222                 ",
    ]
]

// export const level1Mappings = {
//     'w': () => [sprite('city-tileset', { anim: 'tm' }), area({shape: new Rect(vec2(0), 16, 3)}), body({ isStatic: true }), 'passthrough', offscreen({hide: true})],
//     'o': () => [sprite('city-tileset', { anim: 'bridgeM' }), area({shape: new Rect(vec2(0), 16, 3)}), body({ isStatic: true }), 'passthrough', offscreen({hide: true})],
//     'p': () => [sprite('city-tileset', { anim: 'bridgeR' }), area({shape: new Rect(vec2(0), 16, 3)}), body({ isStatic: true }), 'passthrough', offscreen({hide: true})],
//     'i': () => [sprite('city-tileset', { anim: 'bridgeL' }), area({shape: new Rect(vec2(0), 16, 3)}), body({ isStatic: true }), 'passthrough', offscreen({hide: true})],
//     '7': () => [sprite('city-tileset', { anim: 'tl' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '8': () => [sprite('city-tileset', { anim: 'tm' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '9': () => [sprite('city-tileset', { anim: 'tr' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '4': () => [sprite('city-tileset', { anim: 'ml' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '5': () => [sprite('city-tileset', { anim: 'mm' }), offscreen({hide: true})],
//     '6': () => [sprite('city-tileset', { anim: 'mr' }), area(), offscreen({hide: true})],
//     '1': () => [sprite('city-tileset', { anim: 'bl' }), area(), body({ isStatic: true }), offscreen({hide: true})],
//     '2': () => [sprite('city-tileset', { anim: 'bm' }), offscreen({hide: true})],
//     '3': () => [sprite('city-tileset', { anim: 'br' }), area(), offscreen({hide: true})],
//     '@': () => [sprite('coin'), area(), 'coin', offscreen({hide: true})],
// }