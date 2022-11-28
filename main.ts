let Angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        Angle = index * 10 + 10
    }
})
basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        Angle = index * 10 + 10
    }
})
