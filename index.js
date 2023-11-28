const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const textGrass = document.querySelector('.textGrass');
const textFire = document.querySelector('.textFire');
const textWater = document.querySelector('.textWater');
const carta1 = document.querySelector('.carta1');
const carta2 = document.querySelector('.carta2');
const carta3 = document.querySelector('.carta3');
const cartaInimiga1 = document.querySelector('.cartaInimiga1');
const cartaInimiga2 = document.querySelector('.cartaInimiga2');
const cartaInimiga3 = document.querySelector('.cartaInimiga3');



canvas.width = window.innerWidth * 0.99
canvas.height = window.innerHeight * 0.99

var larguraAnterior = window.innerWidth;
var alturaAnterior = window.innerHeight

function verificarMudancaLargura() {
    var larguraAtual = window.innerWidth;
    var alturaAtual = window.innerHeight

    if (larguraAtual !== larguraAnterior) {
        location.reload();
    } else if (alturaAtual !== alturaAnterior) {
        location.reload();
    }
}

// window.addEventListener('resize', verificarMudancaLargura);


if (!localStorage.getItem('valorAltura')) {
    localStorage.setItem('valorAltura', window.innerHeight);
}

const valorRecuperado = (localStorage.getItem('valorAltura'));


const collisionsMap = []
for (let i = 0; i < collisions.length; i += 140) {
    collisionsMap.push(collisions.slice(i, 140 + i))
}


const escolherInicial = new InicialHitbox({
    position: {
        x: 1920,
        y: 110
    },
})

const battle_hitbox1 = new Hitbox({
    position: {
        x: 3150,
        y: -50
    },

})
const battle_hitbox2 = new Hitbox({
    position: {
        x: 5290,
        y: -570
    },

})
const battle_hitbox3 = new Hitbox({
    position: {
        x: 5700,
        y: -2350
    },

})



const boundaries = []
const offset = {
    x: -230,
    y: -3550,
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 11332 || symbol === 11296)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

c.fillStyle = '	rgb(80, 167, 232)'
c.fillRect(0, 0, canvas.width, canvas.height)


const image = new Image()
image.src = './img/cidade2.png'

const foregroundImage = new Image()
foregroundImage.src = './img/FGcidade.png'

const playerImage = new Image()
playerImage.src = './img/player.png'


const player = new Sprite({
    position: {
        x: 850,
        y: 500


    },
    image: playerImage,
    frames: {
        max: 4
    }
})

const hitbox = new Hitbox({
    position: {
        x: player.position.x + player.position.x * 0.055,
        y: player.position.y + player.position.y * 0.15
    },

})




const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
});

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
});

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
};

let direction = '';
let lastKey = '';


const movables = [background, ...boundaries, escolherInicial, foreground, battle_hitbox1, battle_hitbox2, battle_hitbox3]

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y + rectangle1.width >= rectangle2.position.y &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.width
    )
}

function verificarLastKey() {
    if (keys.w.pressed && !keys.a.pressed && !keys.s.pressed && !keys.d.pressed) {
        lastKey = 'w'
    } if (keys.a.pressed && !keys.w.pressed && !keys.s.pressed && !keys.d.pressed) {
        lastKey = 'a'
    } if (keys.s.pressed && !keys.w.pressed && !keys.a.pressed && !keys.d.pressed) {
        lastKey = 's'
    } if (keys.d.pressed && !keys.w.pressed && !keys.a.pressed && !keys.s.pressed) {
        lastKey = 'd'
    }
}























let telaEscolha = false
let fecharEscolha = false
let escolhendo = true
let batalhando1 = false
let gerarNum = false
let perdeu = false
let batalha1 = false
let batalha2 = false
let batalha3 = false
let resetarImagens = true


function animate() {
    window.requestAnimationFrame(animate);


    let moving = true
    if (escolhendo === true) {


        if (!fecharEscolha) {
            if (hitbox.position.x + hitbox.width >= escolherInicial.position.x) {

                telaEscolha = true
                moving = false
                document.addEventListener('keydown', function (event) {
                    if (event.key === 'e' || event.key === 'E') {
                        moving = true
                        fecharEscolha = true
                        telaEscolha = false
                        escolhendo = false
                        verifiqueEscolha()

                    }
                });
                verifiqueEscolha();
            }

        }
    }


    if (hitbox.position.y + hitbox.height >= battle_hitbox1.position.y
        && hitbox.position.x <= battle_hitbox1.position.x + battle_hitbox1.width
        && hitbox.position.x + hitbox.width >= battle_hitbox1.position.x
        && hitbox.position.y <= battle_hitbox1.position.y + battle_hitbox1.height
        && hitbox.position.x <= battle_hitbox1.position.x + battle_hitbox1.width
        && hitbox.position.x + hitbox.width >= battle_hitbox1.position.x
        && perdeu === false) {

        if(resetarImagens){
            cartaInimiga1.style.backgroundImage = 'none'
            cartaInimiga2.style.backgroundImage = 'none'
            cartaInimiga3.style.backgroundImage = 'none'
            setTimeout(() => {
                resetarImagens = false
            }, 100)
        }

        
        batalha1 = true
        batalha2 = false
        batalha3 = false
        card4 = 'geodude'
        card5 = 'ekans'
        card6 = 'sandshrew'


        moving = false
        setTimeout(() => {
            if (batalhando1 === false) {

                verificarMudancaLargura()
                batalhando1 = true

                if (valorRecuperado < window.innerHeight) {
                    carta1.style.height = '50vh'
                    carta2.style.height = '50vh'
                    carta3.style.height = '50vh'
                    carta1.style.marginTop = '25vh'
                    carta2.style.marginTop = '25vh'
                    carta3.style.marginTop = '25vh'
                    attack.style.height = '23vh';
                    trade.style.height = '23vh';
                } else {

                    carta1.style.height = ''
                    carta2.style.height = ''
                    carta3.style.height = ''
                    carta1.style.marginTop = ''
                    carta2.style.marginTop = ''
                    carta3.style.marginTop = ''
                }

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'e' || event.key === 'E') {
                        batalhando1 = false
                        verifiqueBatalha();
                    }
                });

                verifiqueBatalha();
                setTimeout(() => {
                    battle_transition.style.opacity = '0';
                }, 1000);
            }
        }, 70)
    }

    if (hitbox.position.y + hitbox.height >= battle_hitbox2.position.y
        && hitbox.position.x <= battle_hitbox2.position.x + battle_hitbox2.width
        && hitbox.position.x + hitbox.width >= battle_hitbox2.position.x
        && hitbox.position.y <= battle_hitbox2.position.y + battle_hitbox2.height
        && hitbox.position.x <= battle_hitbox2.position.x + battle_hitbox2.width
        && hitbox.position.x + hitbox.width >= battle_hitbox2.position.x
        && perdeu === false) {

            if(resetarImagens){
                cartaInimiga1.style.backgroundImage = 'none'
                cartaInimiga2.style.backgroundImage = 'none'
                cartaInimiga3.style.backgroundImage = 'none'
                setTimeout(() => {
                    resetarImagens = false
                }, 100)
            }
        batalha1 = false
        batalha2 = true
        batalha3 = false
        if (card1 === leafeon){
            carta1.style.backgroundImage = 'url("img/leafeonCard.png")'
        }if (card1 === psyduck){
            carta1.style.backgroundImage = 'url("img/psyduckCard.png")'
        }if (card1 === arcanine){
            carta1.style.backgroundImage = 'url("img/arcanineCard.png")'
        }
        card2 = 'sandshrew'
        carta2.style.backgroundImage = 'url("img/sandshrewCard.png")'
        card3 = 'ekans'
        carta3.style.backgroundImage = 'url("img/ekansCard.png")'
        card4 = 'dragonair'
        card5 = 'gardevoir'
        card6 = 'arctovish'

        moving = false
        setTimeout(() => {
            if (batalhando1 === false) {

                verificarMudancaLargura()
                batalhando1 = true

                if (valorRecuperado < window.innerHeight) {
                    carta1.style.height = '50vh'
                    carta2.style.height = '50vh'
                    carta3.style.height = '50vh'
                    carta1.style.marginTop = '25vh'
                    carta2.style.marginTop = '25vh'
                    carta3.style.marginTop = '25vh'
                    attack.style.height = '23vh';
                    trade.style.height = '23vh';
                } else {

                    carta1.style.height = ''
                    carta2.style.height = ''
                    carta3.style.height = ''
                    carta1.style.marginTop = ''
                    carta2.style.marginTop = ''
                    carta3.style.marginTop = ''
                }

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'e' || event.key === 'E') {
                        batalhando1 = false
                        verifiqueBatalha();
                    }
                });

                verifiqueBatalha();
                setTimeout(() => {
                    battle_transition.style.opacity = '0';
                }, 1000);
            }
        }, 70)
    }

    if (hitbox.position.y + hitbox.height >= battle_hitbox3.position.y
        && hitbox.position.x <= battle_hitbox3.position.x + battle_hitbox3.width
        && hitbox.position.x + hitbox.width >= battle_hitbox3.position.x
        && hitbox.position.y <= battle_hitbox3.position.y + battle_hitbox3.height
        && hitbox.position.x <= battle_hitbox3.position.x + battle_hitbox3.width
        && hitbox.position.x + hitbox.width >= battle_hitbox3.position.x
        && perdeu === false) {

            if(resetarImagens){
                cartaInimiga1.style.backgroundImage = 'none'
                cartaInimiga2.style.backgroundImage = 'none'
                cartaInimiga3.style.backgroundImage = 'none'
                setTimeout(() => {
                    resetarImagens = false
                }, 100)
            }

        batalha1 = false
        batalha2 = false
        batalha3 = true
        if (card1 === exeggutor){
            carta1.style.backgroundImage = 'url("img/exeggutorCard.png")'
        }if (card1 === poliwrath){
            carta1.style.backgroundImage = 'url("img/poliwrathCard.png")'
        }if (card1 === coalossal){
            carta1.style.backgroundImage = 'url("img/coalossalCard.png")'
        }
        card2 = 'arctovish'
        carta2.style.backgroundImage = 'url("img/arctovishCard.png")'
        card3 = 'dragonair'
        carta3.style.backgroundImage = 'url("img/dragonairCard.png")'
        card4 = 'pawmot'
        card5 = 'sableye'
        card6 = 'skarmory'

        moving = false
        setTimeout(() => {
            if (batalhando1 === false) {

                verificarMudancaLargura()
                batalhando1 = true

                if (valorRecuperado < window.innerHeight) {
                    carta1.style.height = '50vh'
                    carta2.style.height = '50vh'
                    carta3.style.height = '50vh'
                    carta1.style.marginTop = '25vh'
                    carta2.style.marginTop = '25vh'
                    carta3.style.marginTop = '25vh'
                    attack.style.height = '23vh';
                    trade.style.height = '23vh';
                } else {

                    carta1.style.height = ''
                    carta2.style.height = ''
                    carta3.style.height = ''
                    carta1.style.marginTop = ''
                    carta2.style.marginTop = ''
                    carta3.style.marginTop = ''
                }

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'e' || event.key === 'E') {
                        batalhando1 = false
                        verifiqueBatalha();
                    }
                });

                verifiqueBatalha();
                setTimeout(() => {
                    battle_transition.style.opacity = '0';
                }, 1000);
            }
        }, 70)
    }


    background.draw()
    // boundaries.forEach((boundary) => {
    //     boundary.draw()
    // })
    // escolherInicial.draw()
    player.draw()

    foreground.draw()
    verificarLastKey()

    let movement = ''
    if (keys.w.pressed && lastKey === 'w') {
        movement = 'w'
    } if (keys.a.pressed && lastKey === 'a') {
        movement = 'a'
    } if (keys.s.pressed && lastKey === 's') {
        movement = 's'
    } if (keys.d.pressed && lastKey === 'd') {
        movement = 'd'
    }





    if (player.position.y > window.innerHeight * 0.3) {
        if (movement === 'w') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y += 3.5 * 1.5
                })
                player.position.y -= 2 * 1.5
                hitbox.position.y -= 2 * 1.5

            }
        }
    } else if (player.position.y > window.innerHeight * 0.35) {
        if (movement === 'w') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y += 3.75 * 1.5
                })
                player.position.y -= 1.5 * 1.5
                hitbox.position.y -= 1.5 * 1.5
            }


        }
    } else {
        if (movement === 'w') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y += 4 * 1.5
                })


            }
        }

    } if (player.position.x > window.innerWidth * 0.35) {
        if (movement === 'a') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x + 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x += 3.5 * 1.5
                })
                player.position.x -= 2 * 1.5
                hitbox.position.x -= 2 * 1.5
            }

        }
    } else if (player.position.x > window.innerWidth * 0.3) {
        if (movement === 'a') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x + 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x += 3.75 * 1.5
                })
                player.position.x -= 1.5 * 1.5
                hitbox.position.x -= 1.5 * 1.5
            }

        }
    } else {
        if (movement === 'a') {

            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x + 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x += 4 * 1.5
                })
            }

        }
    } if (player.position.x < window.innerWidth * 0.52) {
        if (movement === 'd') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x - 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x -= 3.5 * 1.5
                })
                player.position.x += 2 * 1.5
                hitbox.position.x += 2 * 1.5
            }

        }
    } else if (player.position.x < window.innerWidth * 0.57) {
        if (movement === 'd') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x - 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x -= 3.75 * 1.5
                })
                player.position.x += 1.5 * 1.5
                hitbox.position.x += 1.5 * 1.5
            }


        }
    } else {
        if (movement === 'd') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x - 6,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.x -= 4 * 1.5
                })
            }


        }
    } if (player.position.y < window.innerHeight * 0.55) {
        if (movement === 's') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y -= 3.5 * 1.5
                })
                player.position.y += 2 * 1.5
                hitbox.position.y += 2 * 1.5
            }

        }
    } else if (player.position.y < window.innerHeight * 0.5) {
        if (movement === 's') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y -= 3.75 * 1.5
                })
                player.position.y += 1.5 * 1.5
                hitbox.position.y += 1.5 * 1.5
            }


        }
    } else {
        if (movement === 's') {

            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: hitbox,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - 6
                            }
                        }
                    })
                ) {
                    console.log('colidindo')
                    moving = false
                    break
                }
            }
            if (moving) {
                movables.forEach((movable) => {
                    movable.position.y -= 4 * 1.5
                })
            }


        }
    }





}

animate();

window.addEventListener('keydown', (e) => {

    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            direction = 'w';
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            direction = 'a';
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            direction = 's';
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            direction = 'd';
            lastKey = 'd';
            break;
        case 'W':
            keys.w.pressed = true;
            direction = 'w';
            lastKey = 'w';
            break;
        case 'A':
            keys.a.pressed = true;
            direction = 'a';
            lastKey = 'a';
            break;
        case 'S':
            keys.s.pressed = true;
            direction = 's';
            lastKey = 's';
            break;
        case 'D':
            keys.d.pressed = true;
            direction = 'd';
            lastKey = 'd';
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        case 'W':
            keys.w.pressed = false;
            break;
        case 'A':
            keys.a.pressed = false;
            break;
        case 'S':
            keys.s.pressed = false;
            break;
        case 'D':
            keys.d.pressed = false;
            break;
    }

    if (!keys.w.pressed && !keys.a.pressed && !keys.s.pressed && !keys.d.pressed) {
        direction = '';
    }
});




