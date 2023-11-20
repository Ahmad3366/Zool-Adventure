export class Player {

    isRespawning = false
    isMoving = false
    coins = 0

    constructor (initX, initY, speed, jumpForce, nbLives, currLevelScene, isInLastScene) {
        this.posX = initX
        this.posY = initY
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.currLevelScene = currLevelScene
        this.isInLastScene = isInLastScene
        this.makePlayer()
        this.setPlayerControls()
    }

    makePlayer () {
        this.gameObj = add([
            sprite('player', {anim: 'idle'}),
            area({ shape: new Rect(vec2(0), 16, 32) }),
            anchor('center'),
            pos(this.posX, this.posY),
            body(),
            scale(2.5),
            'player',
        ])
    }

    enablePassthrough() {
        this.gameObj.onBeforePhysicsResolve((coll) => {
            if (coll.target.is('passthrough') && this.gameObj.isJumping()) {
                coll.preventResolution()
            }

            if (coll.target.is('passthrough') && isKeyDown('down')) {
                coll.preventResolution()
            }
        })
    }

    enableCoinPickUp() {
        this.gameObj.onCollide('coin', (coin) => {
            this.coins++
            destroy(coin)
            play('coin')
        })
    }

    setPlayerControls() {
        onKeyDown('left', () => {
            // if (this.isRespawning) return
            
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = true
            if (!this.isRespawning) this.gameObj.move(-this.speed, 0)
            this.isMoving = true
        })

        onKeyDown('right', () => {
            // if (this.isRespawning) return
            
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = false
            if (!this.isRespawning) this.gameObj.move(this.speed, 0)
            this.isMoving = true
        })

        onKeyPress('space', () => {
            if (this.gameObj.isGrounded()) {
                this.gameObj.jump(this.jumpForce)
                play('jump')
            }
        })

        onKeyRelease(() => {
            if (isKeyReleased('left') || isKeyReleased('right')) {
                this.gameObj.play('idle')
                this.isMoving = false
            }
        })

    }

    respawnPlayer() {
        if (this.lives > 0) {
            this.lives--
            this.gameObj.pos = vec2(this.posX, this.posY)
            this.isRespawning = true
            setTimeout(() => {
                this.isRespawning = false
            }, 500);
            return
        }

        go('gameover')
    }

    enableMobVunerability() {
        function hitAndRespawn (context) {
            play('hit', {speed: 1.5})
            context.respawnPlayer()
        }
        this.gameObj.onCollide('dogs', () => hitAndRespawn(this))
    }

    update() {
        onUpdate(() => {
            if (this.gameObj.pos.y > 900) {
                play('hit', { speed: 1.5 })
                this.respawnPlayer()
            }

            if (!this.isMoving) {
                this.gameObj.play('idle')
            }

            if (!this.gameObj.isGrounded()) {
                this.gameObj.play('jump')
            }
        })
    }

    updateLivesCount(livesCountUI) {
        onUpdate(() => {
            livesCountUI.text = this.lives
        })
    }

    updateCoinCount(coinCountUI) {
        onUpdate(() => {
            coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
            if (this.coins === coinCountUI.fullCoinCount) {
                go(this.isInLastScene ? 'win' : this.currLevelScene + 1)
            }
        })
    }
}