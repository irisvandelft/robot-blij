input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.showString("hoi")
music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
