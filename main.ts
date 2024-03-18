input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        # . # # #
        # . # . .
        # # # # #
        . . # . #
        # # # . #
        `)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
