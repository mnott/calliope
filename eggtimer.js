/*
 * EggTimer
 *
 * Add one led per time interval.
 * Play a music at the end.
 *
 * mypause is set to 17 seconds,
 * assuming that a soft boiled
 * egg takes about 7 minutes, i.e.,
 * 420 seconds, and we have 25 leds
 * that we want to toggle on over time.
 *
 * Use Button A to start the timer.
 * Use Button B to reset the timer.
 */

let mypause = 17

input.onButtonPressed(Button.B, () => {
    control.reset()
})
input.onButtonPressed(Button.A, () => {
    startTimer()
})

function startTimer()  {
    for (let y = 4; y >= 0; y--) {
        for (let x = 0; x <= 4; x++) {
            basic.pause(mypause * 1000)
            led.plot(x, y)
        }
    }
    music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showIcon(IconNames.Yes)
}
