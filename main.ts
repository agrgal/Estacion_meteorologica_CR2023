radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        TempOUT = "OUTSIDE" + input.temperature() + "ºC"
        radio.sendString(TempOUT)
        basic.showNumber(input.temperature())
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("INSIDE: " + input.temperature())
    cerito.showImage(0)
    basic.showString("C")
    basic.pause(1000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.length > 2) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    // Solicitud de temperatura
    radio.sendNumber(1)
})
let TempOUT = ""
let cerito: Image = null
cerito = images.createImage(`
    # # # . .
    # . # . .
    # # # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
