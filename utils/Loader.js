export const Load = {
    assets: () => {
        loadSprite('Logo', './assets/Logo.png')
        loadSprite('press_enter', './assets/press_enter.png')
        loadSprite('bg1', './assets/BG1.png')
        loadSprite('bg2', './assets/BG2.png')
        loadSprite('bg3', './assets/BG3.png')
        loadSprite('Khartoum', './assets/Khartoum2.png')
        loadSprite('kassala', './assets/kassala.png')
        
        loadSprite('up', './assets/Arrow_Up_Key_Dark.png')
        loadSprite('down', './assets/Arrow_Down_Key_Dark.png')
        loadSprite('left', './assets/Arrow_Left_Key_Dark.png')
        loadSprite('right', './assets/Arrow_Right_Key_Dark.png')
        loadSprite('space', './assets/Space_Key_Dark.png')
        
        loadSprite('coin', './assets/coin.png')
        loadSprite('heart', './assets/heart.png')
        
        loadSprite('player', './assets/Zool.png', {
            sliceX: 7,
            // sliceY: 1,
            anims: {
                idle: 0,
                run: {from: 0, to: 6, loop: true},
                jump: 4
            }
        })
        loadSprite('dog-1', './assets/dog-1.png', {
            sliceX: 6,
            sliceY: 2,
            anims: {
                idle: {from: 0, to: 3, loop: true},
                run: {from: 6, to: 11, loop: true},
                jump: 10
            }
        })

        loadSprite('city-tileset', './assets/tileset_city.png', {
            sliceX: 17,
            sliceY: 21,
            anims: {
                tl: 19,
                tm: 20,
                tr: 21,
                ml: 36,
                mm: 37,
                mr: 38,
                bl: 53,
                bm: 54,
                br: 55,
                bridgeL: 87,
                bridgeM: 88,
                bridgeR: 89
            }
        })

        loadSprite('desert-tileset', './assets/desert-tileset.png', {
            sliceX: 4,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 4,
                mm: 5,
                mr: 6,
            }
        })
    },
    fonts: () => {
        loadFont('Round', './assets/Round9x13.ttf')
    },
    sounds: () => {
        loadSound('confirm-ui', './sounds/confirm-ui.wav')
        loadSound('title theme', './sounds/title theme.mp3')
        loadSound('And The Journey Begins', './sounds/And The Journey Begins.mp3')
        loadSound('jump', './sounds/jump.wav')
        loadSound('hit', './sounds/hit.wav')
        loadSound('coin', './sounds/coin.wav')
    }
}