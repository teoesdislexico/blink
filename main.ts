basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
