class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.1
        }

        this.rain = Bodies.circle(x, y, 5, options)

    }

    update() {
        if (this.rain.position.y > height) {

            Matter.Body.setPosition(this.rain, { x: random(0, 400), y: random(0, 400) })

        }
    }

    display() {

        ellipse(rain.position.x, rain.position.y, 55, 55)

    }
}
