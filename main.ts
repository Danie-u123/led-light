// 1 turns it on
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
// 0 turns it off
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showIcon(IconNames.Duck)
basic.forever(function () {
	
})
