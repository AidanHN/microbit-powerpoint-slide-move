keyboard.startKeyboardService()
basic.forever(function () {
    if (keyboard.isEnabled() && input.buttonIsPressed(Button.A)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.left))
    } else if (keyboard.isEnabled() && input.buttonIsPressed(Button.B)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.right))
    }
})
