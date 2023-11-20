export class Dogs {
    constructor(positions, ranges, durations, type) {
        this.ranges = ranges,
        this.durations = durations
        this.dogs = []
        for (const position of positions) {
            this.dogs.push(
                add([
                    sprite(`dog-${type}`, { anim: 'idle' }),
                    pos(position),
                    area({ shape: new Rect(vec2(-5, 0), 30, 30), collisionIgnore: ['dogs'] }),
                    anchor('bot'),
                    body(),
                    scale(2),
                    state('idle', ['idle', 'run-left', 'run-right']),
                    offscreen(),
                    'dogs'
                ])
            )
        }
    }

    async run(dog, moveBy, duration) {
        if (dog.curAnim() !== 'run') dog.play('run')

        await tween(
            dog.pos.x,
            dog.pos.x + moveBy,
            duration,
            (posX) => dog.pos.x = posX,
            easings.easeOutSine
            // easings.linear
        )
    }

    setMovmentPattren() {
        for (const [index, dog] of this.dogs.entries()) {
            const idle = dog.onStateEnter('idle', async (preState) => {
                if (dog.curAnim() !== 'idle') dog.play('idle')

                await new Promise((resolve) => {
                    setTimeout(() => resolve(), 1000)
                })

                if (preState === 'run-left') {
                    dog.enterState('run-right')
                    return
                }

                dog.jump(700)
                // dog.play('jump')
                // if (!dog.isOffScreen()) {
                //     // play('dog-attack', { volume: 0.6 })
                // }

                dog.enterState('run-left')
            })

            const runLeft = dog.onStateEnter('run-left', async () => {
                dog.flipX = true
                await this.run(
                    dog,
                    -this.ranges[index],
                    this.durations[index]
                )
                dog.enterState('idle', 'run-left')
            })

            const runRight = dog.onStateEnter('run-right', async () => {
                dog.flipX = false
                await this.run(
                    dog,
                    this.ranges[index],
                    this.durations[index]
                )
                dog.enterState('idle')
            })

            onSceneLeave(() => {
                idle.cancel()
                runLeft.cancel()
                runRight.cancel()
            })
        }
    }

    enablePassthrough() {
        for (const dog of this.dogs) {
            dog.onBeforePhysicsResolve((coll) => {
                if (coll.target.is('passthrough') && dog.isJumping()) {
                    coll.preventResolution()
                }
            })   
        }
    }
}