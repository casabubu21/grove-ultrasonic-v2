input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Math.trunc(grove.measureInCentimetersV2(DigitalPin.P2))))
})
basic.showIcon(IconNames.Diamond)
