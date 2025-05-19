BME280.TemperatureBelowThan(24, function () {
    music.stopAllSounds()
})
BME280.TemperatureHigherThan(23, function () {
    music.ringTone(392)
})
BME280.PowerOn()
basic.showNumber(BME280.temperature(BME280_T.T_C))
let TEMPS = BME280.temperature(BME280_T.T_C)
for (let index = 0; index < 2; index++) {
    TEMPS += 1
}
