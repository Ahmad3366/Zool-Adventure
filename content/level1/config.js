export const level1Config = {
    gravity: 1400,
    playerSpeed: 400,
    jumpForce: 650,
    nbLives: 3,
    initXpos: 900,
    // initXpos: 2200,
    initYpos: 250,
    dogsPositions: [
        () => vec2(1400, 400),
        () => vec2(1420, 100),
        () => vec2(2640, 300),
        () => vec2(2900, 400),
        () => vec2(3700, 400),
        () => vec2(4900, 0),
        () => vec2(5600, 400),
    ],
    dogsRanges: [
        300,
        150,
        320,
        300,
        500,
        300,
        500
    ],
    dogsDurations: [
        1.7,
        1,
        2,
        1.7,
        3,
        2,
        2
    ],
    dogsType: 1
}