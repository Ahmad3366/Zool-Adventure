export function attachCamera (gameObj, offsetX, fixedY) {
    onUpdate(() => {
        camPos(gameObj.pos.x + offsetX, fixedY)
    })
}