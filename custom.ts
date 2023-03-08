/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom

 * Custom blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval
     * @param x horizontal led coordinate
     * @param y vertical  led coordinate
     * @param interval time in milliseconds between blinks
     */
    //% block
    export function blink(x: number, y: number, interval: number): void {
        let sprite =game.createSprite(x,y)
        sprite.setBlink(interval)
        sprite.blink()
    }

}
