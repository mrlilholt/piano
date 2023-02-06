pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
