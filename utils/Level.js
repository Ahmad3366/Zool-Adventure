export class Level {
    constructor(tileSize, scaleVactor){
        this.tileSize = tileSize
        this.scaleVactor = scaleVactor
    }
    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: this.tileSize,
            tileHeight: this.tileSize,
            tiles: mappings
        }

        this.map = []
        for(const layerLayout of levelLayout) {
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.map) {
            layer.use(scale(this.scaleVactor))
        }
    }

    drawBackground(bgSpriteName, bgScale = 1, posY = 0) {
        add([
            sprite(bgSpriteName),
            scale(bgScale),
            fixed(),
            pos(0, posY)
        ])
    }
}