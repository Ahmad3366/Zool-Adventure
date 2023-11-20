export function genereteMappings(tileType) {
    return {
        'w': () => [sprite(`${tileType}-tileset`, { anim: 'tm' }), area({ shape: new Rect(vec2(0), 16, 3) }), body({ isStatic: true }), 'passthrough', offscreen({ hide: true })],
        'o': () => [sprite(`${tileType}-tileset`, { anim: 'bridgeM' }), area({ shape: new Rect(vec2(0), 16, 3) }), body({ isStatic: true }), 'passthrough', offscreen({ hide: true })],
        'p': () => [sprite(`${tileType}-tileset`, { anim: 'bridgeR' }), area({ shape: new Rect(vec2(0), 16, 3) }), body({ isStatic: true }), 'passthrough', offscreen({ hide: true })],
        'i': () => [sprite(`${tileType}-tileset`, { anim: 'bridgeL' }), area({ shape: new Rect(vec2(0), 16, 3) }), body({ isStatic: true }), 'passthrough', offscreen({ hide: true })],
        '7': () => [sprite(`${tileType}-tileset`, { anim: 'tl' }), area(), body({ isStatic: true }), offscreen({ hide: true })],
        '8': () => [sprite(`${tileType}-tileset`, { anim: 'tm' }), area(), body({ isStatic: true }), offscreen({ hide: true })],
        '9': () => [sprite(`${tileType}-tileset`, { anim: 'tr' }), area(), body({ isStatic: true }), offscreen({ hide: true })],
        '4': () => [sprite(`${tileType}-tileset`, { anim: 'ml' }), area(), body({ isStatic: true }), offscreen({ hide: true })],
        '5': () => [sprite(`${tileType}-tileset`, { anim: 'mm' }), offscreen({ hide: true })],
        '6': () => [sprite(`${tileType}-tileset`, { anim: 'mr' }), area(), offscreen({ hide: true })],
        '1': () => [sprite(`${tileType}-tileset`, { anim: 'bl' }), area(), body({ isStatic: true }), offscreen({ hide: true })],
        '2': () => [sprite(`${tileType}-tileset`, { anim: 'bm' }), offscreen({ hide: true })],
        '3': () => [sprite(`${tileType}-tileset`, { anim: 'br' }), area(), offscreen({ hide: true })],
        '@': () => [sprite('coin'), area(), 'coin', offscreen({ hide: true })],
    }
}