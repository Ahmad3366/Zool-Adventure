import kaboom from "kaboom";
import { Load } from "./utils/Loader";
import { Level } from "./utils/Level";
import { uiManager } from "./utils/UIManager";
import { attachCamera } from "./utils/camera";
import { Player } from "./entities/Player";
import { Dogs } from "./entities/Dogs";

import { level1Layout, level1Mappings } from "./content/level1/level1.js";
import { level1Config } from "./content/level1/config.js";
import { level2Layout, level2Mappings } from "./content/level2/level2.js";

const k = kaboom({
    // backgroundAudio: true,
    // background: [49,190,243]
    // width: 1280,
    // height: 720,
    // // letterbox: true
})



Load.fonts()
Load.sounds()
Load.assets()

const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: ({m}) => {
        uiManager.displayControls(m)
    },
    1: () => {
        play('And The Journey Begins')
        setGravity(level1Config.gravity)

        const level1 = new Level(16, 3)
        level1.drawBackground('Khartoum', 1.1, -50)
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(
            level1Config.initXpos,
            level1Config.initYpos,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVunerability()
        player.update()

        const dogs = new Dogs(
            level1Config.dogsPositions.map(dogPos => dogPos()),
            level1Config.dogsRanges,
            level1Config.dogsDurations,
            level1Config.dogsType
        )
        dogs.setMovmentPattren()
        dogs.enablePassthrough()

        attachCamera(player.gameObj, 0, 200)

        uiManager.drawBlackBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLivesCount(uiManager.livesCountUI)

    },
    2: () => {
        setGravity(level1Config.gravity)

        const level2 = new Level(32, 2)
        level2.drawBackground('kassala', 1.1, -300)
        level2.drawMapLayout(level2Layout, level2Mappings)

        const player = new Player(
            90,
            level1Config.initYpos,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVunerability()
        player.update()

        attachCamera(player.gameObj, 0, 200)
    },
    3: () => {},
    gameover: () => {},
    end: () => {}
}

for (const key in scenes) {
    scene(key, scenes[key])
}


go('2')

// k.debug.inspect = true