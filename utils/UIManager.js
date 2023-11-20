class UIManager {

    displayLivesCount () {
        this.livesCountUI = add([
            text('', {size: 40, font: 'Round'}),
            fixed(),
            pos(60, 20)
        ])

        this.livesCountUI.add([
            sprite('heart'),
            pos(-65, -15),
            scale(4),
            fixed()
        ])
    }

    displayCoinCount () {
        this.coinCountUI = add([
            text('', {size: 40, font: 'Round'}),
            {
                fullCoinCount: get('coin', {recursive: true}).length
            },
            fixed(),
            pos(60, 70)
        ])

        this.coinCountUI.add([
            sprite('coin'),
            pos(-65, -15),
            scale(4),
            fixed()
        ])
    }

    drawMovingLogo(positionY) {
        const logo = add([
            sprite('Logo'),
            scale(0.4),
            anchor('center'),
            pos(center().x, positionY),
            state('move-down', ['move-down', 'move-up'])
        ])

        logo.onStateEnter('move-down', async () => {
            await tween(
                logo.pos.y,
                logo.pos.y + 15,
                2,
                (newPos) => logo.pos.y = newPos,
                easings.easeInOutCubic
            )
            logo.enterState('move-up')
        })
        logo.onStateEnter('move-up', async () => {
            await tween(
                logo.pos.y,
                logo.pos.y - 15,
                2,
                (newPos) => logo.pos.y = newPos,
                easings.easeInOutCubic
            )
            logo.enterState('move-down')
        })
    }

    displayBlinkingUIMassage(position){
        const message = add([
            sprite('press_enter'),
            pos(position),
            anchor('center'),
            opacity(),
            scale(0.5),
            state('flash-up', ['flash-up', 'flash-down'])
        ])

        message.onStateEnter('flash-up', async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacity) => message.opacity = nextOpacity,
                easings.linear
            )
            message.enterState('flash-down')
        })
        message.onStateEnter('flash-down', async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacity) => message.opacity = nextOpacity,
                easings.linear
            )
            message.enterState('flash-up')
        })
    }

    drawBackground() {
        add([
            sprite('bg1'),
            scale(4.3)
        ])
        add([
            sprite('bg2'),
            scale(4.3)
        ])
        add([
            sprite('bg3'),
            scale(4.3)
        ])
    }

    displayMainMenu() {
        this.drawBackground()

        const m = play('title theme')

        this.drawMovingLogo(
            center().y - 200
            )

        this.displayBlinkingUIMassage(
            // 'PRESS [ ENTER ] TO START GAME',
            vec2(center().x, center().y + 100)
        )
        onKeyPress('enter', () => {
            play('confirm-ui')
            go('controls', {m})
        })
    }

    displayControls(m) {
        this.drawBackground()

        add([
            text('CONTROLS', {size: 50, font: 'Round'}),
            anchor('center'),
            color(0, 0, 0),
            pos(center().x, center().y - 200)
        ])

        const controls = add([
            pos(center().x + 30, center().y)
        ])

        controls.add([sprite('up'), pos(0, -80)])
        controls.add([sprite('down'), pos(0, 0)])
        controls.add([sprite('left'), pos(-80, 0)])
        controls.add([sprite('right'), pos(80, 0)])
        controls.add([sprite('space'), pos(-200, 0)])

        controls.add([
            text('jump', {font: 'Round', size: 32}),
            pos(-190, 100),
            color(0, 0, 0)
        ])
        controls.add([
            text('Move', {font: 'Round', size: 32}),
            pos(10, 100),
            color(0, 0, 0)
        ])

        this.displayBlinkingUIMassage(
            // 'PRESS [ ENTER ] TO START GAME',
            vec2(center().x, center(). y + 250)
        )

        onKeyPress('enter', () => {
            play('confirm-ui')
            m.stop()
            go('1')
        })
    }

    drawBlackBg () {
        add([
            rect(210, 120),
            color(0, 0, 50),
            fixed()
        ])
    }
}

export const uiManager = new UIManager()