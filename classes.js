class Sprite {
    constructor({ position, velocity, image, frames = { max : 1 } }) {
        this.position = position;
        this.image = image;
        this.frames = frames;
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }

    }
    
        draw() {
            c.drawImage(
                this.image,
                0,
                0,
                this.image.width / this.frames.max,
                this.image.height,
                this.position.x,
                this.position.y,
                this.image.width / this.frames.max,
                this.image.height
            );
        }
    }
    
    
    
    class Boundary {
        static width = 64
        static height = 64
        constructor({ position }) {
            this.position = position
            this.width = 64
            this.height = 64
        }
    
        draw() {
            c.globalAlpha = 0.5;
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.globalAlpha = 1;
        }
    }


    class Hitbox {
        constructor({ position }) {
            this.position = position
            this.width = 64
            this.height = 68
        }
    
        draw() {
            c.globalAlpha = 0.5;
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.globalAlpha = 1;
        }
    }
    


    class InicialHitbox {
        constructor({ position }) {
            this.position = position
            this.width = 60
            this.height = 590
        }
    
        draw() {
            c.globalAlpha = 0.5;
            c.fillStyle = 'blue'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.globalAlpha = 1;
        }
    }
    
