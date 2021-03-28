basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        serial.writeValue("Leitura P1", pins.analogReadPin(AnalogPin.P1))
    } else {
        serial.writeValue("Leitura P1", pins.analogReadPin(AnalogPin.P1))
    }
})
basic.forever(function () {
	
})
