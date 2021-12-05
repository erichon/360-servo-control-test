input.onButtonPressed(Button.A, function () {
    direction = clockwise
})
input.onButtonPressed(Button.AB, function () {
    direction = stop
})
input.onButtonPressed(Button.B, function () {
    direction = anticlockwise
})
let direction = 0
let stop = 0
let anticlockwise = 0
let clockwise = 0
led.enable(false)
pins.analogSetPeriod(AnalogPin.P6, 20000)
clockwise = 1
anticlockwise = 2
stop = 0
let cw_speed = 1350
let acw_speed = 2000
let stop_speed = 0
basic.forever(function () {
    if (direction == clockwise) {
        pins.servoSetPulse(AnalogPin.P6, cw_speed)
    }
    if (direction == anticlockwise) {
        pins.servoSetPulse(AnalogPin.P6, acw_speed)
    }
    if (direction == stop) {
        pins.servoSetPulse(AnalogPin.P6, stop_speed)
    }
})
