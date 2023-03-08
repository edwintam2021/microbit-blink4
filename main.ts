basic.showIcon(IconNames.Heart)
for (let i = 0; i <= 4; i++) {
    basic.pause(100)
    animations.blink(i, i, 100 + i * 100)
}
