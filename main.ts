serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    rawData = serial.readUntil(serial.delimiters(Delimiters.CarriageReturn))
    windDirection = rawData.substr(7, 3)
    windSpeed = rawData.substr(11, 4)
    temp = rawData.substr(57, 3)
    humidity = rawData.substr(61, 2)
    airPressure = rawData.substr(65, 5)
    rain = rawData.substr(31, 4)
    radio.sendString(rawData)
    datalogger.log(datalogger.createCV("rawdata ", rawData))
})
let rain = ""
let airPressure = ""
let humidity = ""
let temp = ""
let windSpeed = ""
let windDirection = ""
let rawData = ""
serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate9600
)
serial.setRxBufferSize(74)
radio.setGroup(142)
radio.setTransmitPower(3)
basic.forever(function () {
	
})
