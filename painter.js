/*
 * Painter
 *
 * Use the A/B buttons to move the
 * cursor across the screen.
 *
 * Use both buttons together to
 * toggle an LED.
 *
 * Shake to erase the image.
 */

let leds = [false];
let cursor = 0;

eraseImage()

function eraseImage() {
    leds = [false]
    cursor = 0
    for (let i = 1; i < 25; i++) {
        leds.push(false)
    }
    showImage(0)
}

function showImage(cur: number) {
    basic.clearScreen()
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            let i = r * 5 + c
            if (cur == i) {
                if (!leds[i]) {
                    led.plot(c, r)
                }
            } else {
                if (leds[i]) {
                    led.plot(c, r)
                }
            }
        }
    }
}

function toggleLed() {
    leds[cursor] = !leds[cursor]
    advance(1)
}

function advance(n: number) {
    cursor += n
    if (cursor >= 25) {
        cursor = 0
    } else if (cursor < 0) {
        cursor = 25
    }
    showImage(cursor)
}

input.onButtonPressed(Button.A, () => {
    advance(-1)
})

input.onButtonPressed(Button.B, () => {
    advance(1)
})

input.onButtonPressed(Button.AB, () => {
    toggleLed()
})

input.onGesture(Gesture.Shake, () => {
    eraseImage()
})
