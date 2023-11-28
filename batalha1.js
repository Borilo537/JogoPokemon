const battle_transition = document.querySelector('.battle_transition');
const battle_bg = document.querySelector('.battle_bg');
const battle_bg2 = document.querySelector('.battle_bg2');
const batalhaEscolha = document.querySelector('.batalhaEscolha');
const attack = document.querySelector('.attack');
const trade = document.querySelector('.trade');
const nome = document.querySelector('.nome');
const atk = document.querySelector('.atk');
const atkNum = document.querySelector('.atkNum');
const atkType = document.querySelector('.atkType');
const def = document.querySelector('.def');
const defNum = document.querySelector('.defNum');
const defType = document.querySelector('.defType');
const nomeInimigo = document.querySelector('.nomeInimigo');
const atkInimigo = document.querySelector('.atkInimigo');
const atkNumInimigo = document.querySelector('.atkNumInimigo');
const atkTypeInimigo = document.querySelector('.atkTypeInimigo');
const defInimigo = document.querySelector('.defInimigo');
const defNumInimigo = document.querySelector('.defNumInimigo');
const defTypeInimigo = document.querySelector('.defTypeInimigo');
const atkInfo = document.querySelector('.atkInfo');
const atkNumInfo = document.querySelector('.atkNumInfo');
const atkTypeInfo = document.querySelector('.atkTypeInfo');
const defInfo = document.querySelector('.defInfo');
const defNumInfo = document.querySelector('.defNumInfo');
const defTypeInfo = document.querySelector('.defTypeInfo');
const vitoriaMsg = document.querySelector('.vitoriaMsg');
const derrotaMsg = document.querySelector('.derrotaMsg');
const empateMsg = document.querySelector('.empateMsg');
const telaVitoria = document.querySelector('.telaVitoria');



let subs = true
let cliques = true
let clique1 = true
let clique2 = true
let clique3 = true
let numeroDecimal = 0
let numeroAleatorio = 0
let rodada = 0
let cartaTroca = 0

let botaoTroca = false
let TROCA = true
let ATAQUE = true
let tradeCooldown = 3
let tradeCooldownInimigo = 2

let c1viva = true
let c2viva = true
let c3viva = true
let c1vivaInimigo = true
let c2vivaInimigo = true
let c3vivaInimigo = true
let cartasMortas = 0
let cartasInimigasMortas = 0

let vitorias1 = 0
let vitorias2 = 0
let vitorias3 = 0


function carta1hover() {
    carta1.style.transform = 'scale(1.1) rotate(11deg)'
    carta1.style.border = '0.5vw solid yellow'
    carta1.style.marginTop = '73vh'
    atkInfo.style.opacity = '0.5';
    atkNumInfo.style.opacity = '0.5';
    atkTypeInfo.style.opacity = '0.5';
    defInfo.style.opacity = '0.5';
    defNumInfo.style.opacity = '0.5';
    defTypeInfo.style.opacity = '0.5';
    atkInfo.style.zIndex = '31';
    atkNumInfo.style.zIndex = '31';
    atkTypeInfo.style.zIndex = '31';
    defInfo.style.zIndex = '31';
    defNumInfo.style.zIndex = '31';
    defTypeInfo.style.zIndex = '31';
    cartaInfo = card1
}

function carta2hover() {
    carta2.style.transform = 'scale(1.1) rotate(11deg)'
    carta2.style.border = '0.5vw solid yellow'
    carta2.style.marginTop = '73vh'
    atkInfo.style.opacity = '0.5';
    atkNumInfo.style.opacity = '0.5';
    atkTypeInfo.style.opacity = '0.5';
    defInfo.style.opacity = '0.5';
    defNumInfo.style.opacity = '0.5';
    defTypeInfo.style.opacity = '0.5';
    atkInfo.style.zIndex = '31';
    atkNumInfo.style.zIndex = '31';
    atkTypeInfo.style.zIndex = '31';
    defInfo.style.zIndex = '31';
    defNumInfo.style.zIndex = '31';
    defTypeInfo.style.zIndex = '31';
    cartaInfo = card2
}

function carta3hover() {
    carta3.style.transform = 'scale(1.1) rotate(25deg)'
    carta3.style.border = '0.5vw solid yellow'
    carta3.style.marginTop = '73vh'
    atkInfo.style.opacity = '0.5';
    atkNumInfo.style.opacity = '0.5';
    atkTypeInfo.style.opacity = '0.5';
    defInfo.style.opacity = '0.5';
    defNumInfo.style.opacity = '0.5';
    defTypeInfo.style.opacity = '0.5';
    atkInfo.style.zIndex = '31';
    atkNumInfo.style.zIndex = '31';
    atkTypeInfo.style.zIndex = '31';
    defInfo.style.zIndex = '31';
    defNumInfo.style.zIndex = '31';
    defTypeInfo.style.zIndex = '31';
    cartaInfo = card3
}
function carta1hoverout() {
    carta1.style.transform = 'rotate(11deg)'
    carta1.style.border = ''
    if (cartaAtual === carta1) {
        carta1.style.marginTop = '52vh'
    } else {
        carta1.style.marginTop = '78vh'
    }
    atkInfo.style.opacity = '';
    atkNumInfo.style.opacity = '';
    atkTypeInfo.style.opacity = '';
    defInfo.style.opacity = '';
    defNumInfo.style.opacity = '';
    defTypeInfo.style.opacity = '';
    atkInfo.style.zIndex = '';
    atkNumInfo.style.zIndex = '';
    atkTypeInfo.style.zIndex = '';
    defInfo.style.zIndex = '';
    defNumInfo.style.zIndex = '';
    defTypeInfo.style.zIndex = '';
}

function carta2hoverout() {
    carta2.style.transform = 'rotate(11deg)'
    carta2.style.border = ''
    if (cartaAtual === carta2) {
        carta2.style.marginTop = '52vh'
    } else {
        carta2.style.marginTop = '78vh'
    }
    atkInfo.style.opacity = '';
    atkNumInfo.style.opacity = '';
    atkTypeInfo.style.opacity = '';
    defInfo.style.opacity = '';
    defNumInfo.style.opacity = '';
    defTypeInfo.style.opacity = '';
    atkInfo.style.zIndex = '';
    atkNumInfo.style.zIndex = '';
    atkTypeInfo.style.zIndex = '';
    defInfo.style.zIndex = '';
    defNumInfo.style.zIndex = '';
    defTypeInfo.style.zIndex = '';
}

function carta3hoverout() {
    carta3.style.transform = 'rotate(25deg)'
    carta3.style.border = ''
    if (cartaAtual === carta3) {
        carta3.style.marginTop = '52vh'
    } else {
        carta3.style.marginTop = '78vh'
    }
    atkInfo.style.opacity = '';
    atkNumInfo.style.opacity = '';
    atkTypeInfo.style.opacity = '';
    defInfo.style.opacity = '';
    defNumInfo.style.opacity = '';
    defTypeInfo.style.opacity = '';
    atkInfo.style.zIndex = '';
    atkNumInfo.style.zIndex = '';
    atkTypeInfo.style.zIndex = '';
    defInfo.style.zIndex = '';
    defNumInfo.style.zIndex = '';
    defTypeInfo.style.zIndex = '';
}



function verifiqueBatalha() {
    
    if (batalhando1 === true) {

        if (TROCA === false) {
            cliques = false
        } else {
            cliques = true
        }
        nomeCarta = card1
        cartaAtual = carta1
        setTimeout(() => {
            cartaAtual = 0
        }, 300)
        battle_transition.style.opacity = '1';
        setTimeout(() => {
            battle_bg.style.opacity = '1';
            battle_bg2.style.opacity = '1';
            batalhaEscolha.style.opacity = '1';
            carta1.style.opacity = '1';
            carta2.style.opacity = '1';
            carta3.style.opacity = '1';
            cartaInimiga1.style.opacity = '1';
            cartaInimiga2.style.opacity = '1';
            cartaInimiga3.style.opacity = '1';
            carta1.style.zIndex = '42';
            carta2.style.zIndex = '41';
            carta3.style.zIndex = '40';
        }, 500)
        setTimeout(() => {
            battle_transition.style.opacity = '0';
        }, 1400)


        if (cliques === true) {

            // ESCOLHER CARTA 1
            if (clique1) {
                carta1.addEventListener('click', clicar1)
            }

            // ESCOLHER CARTA 2
            if (clique2) {
                carta2.addEventListener('click', clicar2)
            }

            // ESCOLHER CARTA 3
            if (clique3) {
                carta3.addEventListener('click', clicar3)
            }
        }

        function clicar1() {
            if (TROCA && c1viva && cartaAtual != carta1) {
                rodada += 1

                nomeCarta = card1
                cartaAtual = carta1

                if (subs) {
                    numeroDecimal = Math.random();
                    numeroAleatorio = Math.floor(numeroDecimal * 3) + 1;
                    subs = false
                }
                attack.style.opacity = '1';
                attack.style.zIndex = '10';
                trade.style.opacity = '1';
                trade.style.zIndex = '10';
                nome.style.opacity = '1';
                atk.style.opacity = '1';
                atkNum.style.opacity = '1';
                atkType.style.opacity = '1';
                def.style.opacity = '1';
                defNum.style.opacity = '1';
                defType.style.opacity = '1';
                nomeInimigo.style.opacity = '1';
                atkInimigo.style.opacity = '1';
                atkNumInimigo.style.opacity = '1';
                atkTypeInimigo.style.opacity = '1';
                defInimigo.style.opacity = '1';
                defNumInimigo.style.opacity = '1';
                defTypeInimigo.style.opacity = '1';
                batalhaEscolha.style.opacity = '0';
                carta1.style.width = '15vw';
                carta1.style.height = '42.5vh';
                carta1.style.marginTop = '52vh';
                carta1.style.marginLeft = '14vw';
                carta1.style.transform = '';
                carta1.style.opacity = '1';
                carta2.style.width = '12vw';
                carta2.style.height = '35vh';
                carta2.style.marginTop = '83vh';
                carta2.style.marginLeft = '-56vw';
                carta2.style.transform = 'rotate(11deg)';
                carta2.style.opacity = '1';
                carta3.style.width = '12vw';
                carta3.style.height = '35vh';
                carta3.style.marginTop = '85vh';
                carta3.style.marginLeft = '-36vw';
                carta3.style.transform = 'rotate(25deg)';
                carta3.style.opacity = '1';


                ativarInimigo();
                clique1 = false

                if (botaoTroca) {
                    reset()
                    botaoTroca = false
                }
                cooldown();
            }
        }


        function clicar2() {
            if (TROCA && c2viva && cartaAtual != carta2) {

                rodada += 1
                nomeCarta = card2
                cartaAtual = carta2
                if (subs) {
                    numeroDecimal = Math.random();
                    numeroAleatorio = Math.floor(numeroDecimal * 3) + 1;
                    subs = false
                }
                attack.style.opacity = '1';
                attack.style.zIndex = '10';
                trade.style.opacity = '1';
                trade.style.zIndex = '10';
                nome.style.opacity = '1';
                atk.style.opacity = '1';
                atkNum.style.opacity = '1';
                atkType.style.opacity = '1';
                def.style.opacity = '1';
                defNum.style.opacity = '1';
                defType.style.opacity = '1';
                nomeInimigo.style.opacity = '1';
                atkInimigo.style.opacity = '1';
                atkNumInimigo.style.opacity = '1';
                atkTypeInimigo.style.opacity = '1';
                defInimigo.style.opacity = '1';
                defNumInimigo.style.opacity = '1';
                defTypeInimigo.style.opacity = '1';
                batalhaEscolha.style.opacity = '0';
                carta2.style.width = '15vw';
                carta2.style.height = '42.5vh';
                carta2.style.marginTop = '52vh';
                carta2.style.marginLeft = '14vw';
                carta2.style.transform = '';
                carta2.style.opacity = '1';
                carta3.style.width = '12vw';
                carta3.style.height = '35vh';
                carta3.style.marginTop = '83vh';
                carta3.style.marginLeft = '-56vw';
                carta3.style.transform = 'rotate(11deg)';
                carta3.style.opacity = '1';
                carta1.style.width = '12vw';
                carta1.style.height = '35vh';
                carta1.style.marginTop = '85vh';
                carta1.style.marginLeft = '-36vw';
                carta1.style.transform = 'rotate(25deg)';
                carta1.style.opacity = '1';

                ativarInimigo();
                clique2 = false


                if (botaoTroca) {
                    reset();
                    botaoTroca = false
                }

                cooldown()

            }
        }

        function clicar3() {
            if (TROCA && c3viva && cartaAtual != carta3) {

                rodada += 1
                nomeCarta = card3
                cartaAtual = carta3
                if (subs) {
                    numeroDecimal = Math.random();
                    numeroAleatorio = Math.floor(numeroDecimal * 3) + 1;
                    subs = false
                }
                attack.style.opacity = '1';
                attack.style.zIndex = '10';
                trade.style.opacity = '1';
                trade.style.zIndex = '10';
                nome.style.opacity = '1';
                atk.style.opacity = '1';
                atkNum.style.opacity = '1';
                atkType.style.opacity = '1';
                def.style.opacity = '1';
                defNum.style.opacity = '1';
                defType.style.opacity = '1';
                nomeInimigo.style.opacity = '1';
                atkInimigo.style.opacity = '1';
                atkNumInimigo.style.opacity = '1';
                atkTypeInimigo.style.opacity = '1';
                defInimigo.style.opacity = '1';
                defNumInimigo.style.opacity = '1';
                defTypeInimigo.style.opacity = '1';
                batalhaEscolha.style.opacity = '0';
                carta3.style.width = '15vw';
                carta3.style.height = '42.5vh';
                carta3.style.marginTop = '52vh';
                carta3.style.marginLeft = '14vw';
                carta3.style.transform = '';
                carta3.style.opacity = '1';
                carta2.style.width = '12vw';
                carta2.style.height = '35vh';
                carta2.style.marginTop = '83vh';
                carta2.style.marginLeft = '-56vw';
                carta2.style.transform = 'rotate(11deg)';
                carta2.style.opacity = '1';
                carta1.style.width = '12vw';
                carta1.style.height = '35vh';
                carta1.style.marginTop = '85vh';
                carta1.style.marginLeft = '-36vw';
                carta1.style.transform = 'rotate(25deg)';
                carta1.style.opacity = '1';


                ativarInimigo();
                clique3 = false


                if (botaoTroca) {
                    reset();
                    botaoTroca = false
                }
                cooldown();
            }
        }




        function ativarInimigo() {


            if (numeroAleatorio === 1 && c1vivaInimigo) {
                nomeCartaInimigo = card4
                cartaAtualInimigo = cartaInimiga1
                cartaInimiga1.style.transform = '';
                cartaInimiga1.style.border = 'none';
                cartaInimiga1.style.width = '15vw';
                cartaInimiga1.style.height = '42.5vh';
                cartaInimiga1.style.marginLeft = '14vw';
                cartaInimiga1.style.marginTop = '6vh';
                cartaInimiga2.style.width = '12vw';
                cartaInimiga2.style.height = '35vh';
                cartaInimiga2.style.marginTop = '-14vh';
                cartaInimiga2.style.marginLeft = '-56vw';
                cartaInimiga2.style.transform = 'rotate(30deg)';
                cartaInimiga2.style.backgroundImage = 'none';
                cartaInimiga2.style.border = '';
                cartaInimiga3.style.width = '12vw';
                cartaInimiga3.style.height = '35vh';
                cartaInimiga3.style.marginTop = '-11vh';
                cartaInimiga3.style.marginLeft = '-34vw';
                cartaInimiga3.style.transform = 'rotate(10deg)'
                cartaInimiga3.style.backgroundImage = 'none';
                cartaInimiga3.style.border = '';

            } if (numeroAleatorio === 2 && c2vivaInimigo) {
                nomeCartaInimigo = card5
                cartaAtualInimigo = cartaInimiga2
                cartaInimiga2.style.transform = '';
                cartaInimiga2.style.border = 'none';
                cartaInimiga2.style.width = '15vw';
                cartaInimiga2.style.height = '42.5vh';
                cartaInimiga2.style.marginLeft = '14vw';
                cartaInimiga2.style.marginTop = '6vh';
                cartaInimiga1.style.width = '12vw';
                cartaInimiga1.style.height = '35vh';
                cartaInimiga1.style.marginTop = '-14vh';
                cartaInimiga1.style.marginLeft = '-56vw';
                cartaInimiga1.style.transform = 'rotate(30deg)';
                cartaInimiga1.style.backgroundImage = 'none';
                cartaInimiga1.style.border = '';
                cartaInimiga3.style.width = '12vw';
                cartaInimiga3.style.height = '35vh';
                cartaInimiga3.style.marginTop = '-11vh';
                cartaInimiga3.style.marginLeft = '-34vw';
                cartaInimiga3.style.transform = 'rotate(10deg)'
                cartaInimiga3.style.backgroundImage = 'none';
                cartaInimiga3.style.border = '';

            } if (numeroAleatorio === 3 && c3vivaInimigo) {
                nomeCartaInimigo = card6
                cartaAtualInimigo = cartaInimiga3
                cartaInimiga3.style.transform = '';
                cartaInimiga3.style.border = 'none';
                cartaInimiga3.style.width = '15vw';
                cartaInimiga3.style.height = '42.5vh';
                cartaInimiga3.style.marginLeft = '14vw';
                cartaInimiga3.style.marginTop = '6vh';
                cartaInimiga2.style.width = '12vw';
                cartaInimiga2.style.height = '35vh';
                cartaInimiga2.style.marginTop = '-14vh';
                cartaInimiga2.style.marginLeft = '-56vw';
                cartaInimiga2.style.backgroundImage = 'none';
                cartaInimiga2.style.border = '';
                cartaInimiga2.style.transform = 'rotate(30deg)';
                cartaInimiga1.style.width = '12vw';
                cartaInimiga1.style.height = '35vh';
                cartaInimiga1.style.marginTop = '-11vh';
                cartaInimiga1.style.marginLeft = '-34vw';
                cartaInimiga1.style.transform = 'rotate(10deg)'
                cartaInimiga1.style.backgroundImage = 'none';
                cartaInimiga1.style.border = '';
            }

        }

        function morte() {
            if (cartaAtual === carta1 && battleCard1[1] <= 0) {

                cartasMortas += 1
                carta1.style.filter = 'saturate(0)';
                atk.style.color = '';
                atkNum.style.color = '';
                atkType.style.color = '';
                c1viva = false
                ATAQUE = false
                attack.style.color = 'rgb(45, 45, 45)'
                attack.style.backgroundColor = 'rgb(90, 90, 90)';
                attack.style.border = '0.5vw solid rgb(43, 43, 43)';
                console.log('CARTA 1 MORTA')
            } if (cartaAtual === carta2 && battleCard1[1] <= 0) {

                console.log('CARTA 2 MORTA')
                cartasMortas += 1
                carta2.style.filter = 'saturate(0)';
                atk.style.color = '';
                atkNum.style.color = '';
                atkType.style.color = '';
                c2viva = false
                ATAQUE = false
                attack.style.color = 'rgb(45, 45, 45)'
                attack.style.backgroundColor = 'rgb(90, 90, 90)';
                attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            } if (cartaAtual === carta3 && battleCard1[1] <= 0) {

                console.log('CARTA 3 MORTA')
                cartasMortas += 1
                carta3.style.filter = 'saturate(0)';
                atk.style.color = '';
                atkNum.style.color = '';
                atkType.style.color = '';
                c3viva = false
                ATAQUE = false
                attack.style.color = 'rgb(45, 45, 45)'
                attack.style.backgroundColor = 'rgb(90, 90, 90)';
                attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            } setTimeout(() => {
                if (cartaAtualInimigo === cartaInimiga1 && battleCard2[1] <= 0) {
                    tradeCooldownInimigo = 0
                    cooldownInimigo()
                    console.log('CARTA 1 MORTA inimigo')
                    cartasInimigasMortas += 1
                    cartaInimiga1.style.filter = 'saturate(0)';
                    c1vivaInimigo = false
                    setTimeout(() => {
                        substit()
                    }, 300)
                } if (cartaAtualInimigo === cartaInimiga2 && battleCard2[1] <= 0) {
                    tradeCooldownInimigo = 0
                    cooldownInimigo()
                    console.log('CARTA 2 MORTA inimigo')
                    cartasInimigasMortas += 1
                    cartaInimiga2.style.filter = 'saturate(0)';
                    c2vivaInimigo = false
                    setTimeout(() => {
                        substit()
                    }, 300)
                } if (cartaAtualInimigo === cartaInimiga3 && battleCard2[1] <= 0) {
                    tradeCooldownInimigo = 0
                    cooldownInimigo()
                    console.log('CARTA 3 MORTA inimigo')
                    cartasInimigasMortas += 1
                    cartaInimiga3.style.filter = 'saturate(0)';
                    c3vivaInimigo = false
                    setTimeout(() => {
                        substit()
                    }, 300)
                }
            }, 300)
        }

        function substit() {
            if (TROCA === false) {
                TROCA = true
            }


            if (cartaAtualInimigo === cartaInimiga1 && battleCard2[1] <= 0) {

                randomValor = Math.random();
                numMorte = randomValor >= 0.5 ? 1 : 0;
                if (numMorte === 0) {
                    if (c2vivaInimigo) {
                        numeroAleatorio = 2
                        ativarInimigo()

                    } else if (c3vivaInimigo) {
                        numeroAleatorio = 3
                        ativarInimigo()
                    }
                } else if (numMorte === 1) {
                    if (c3vivaInimigo) {
                        numeroAleatorio = 3
                        ativarInimigo()

                    } else if (c2vivaInimigo) {
                        numeroAleatorio = 2
                        ativarInimigo()
                    }
                }

            } if (cartaAtualInimigo === cartaInimiga2 && battleCard2[1] <= 0) {

                randomValor = Math.random();
                numMorte = randomValor >= 0.5 ? 1 : 0;
                if (numMorte === 0) {
                    if (c1vivaInimigo) {
                        numeroAleatorio = 1
                        ativarInimigo()

                    } else if (c3vivaInimigo) {
                        numeroAleatorio = 3
                        ativarInimigo()
                    }
                } else if (numMorte === 1) {
                    if (c3vivaInimigo) {
                        numeroAleatorio = 3
                        ativarInimigo()

                    } else if (c1vivaInimigo) {
                        numeroAleatorio = 1
                        ativarInimigo()
                    }
                }
            } if (cartaAtualInimigo === cartaInimiga3 && battleCard2[1] <= 0) {

                randomValor = Math.random();
                numMorte = randomValor >= 0.5 ? 1 : 0;
                if (numMorte === 0) {
                    if (c1vivaInimigo) {
                        numeroAleatorio = 1
                        ativarInimigo()

                    } else if (c2vivaInimigo) {
                        numeroAleatorio = 2
                        ativarInimigo()
                    }
                } else if (numMorte === 1) {
                    if (c2vivaInimigo) {
                        numeroAleatorio = 2
                        ativarInimigo()

                    } else if (c1vivaInimigo) {
                        numeroAleatorio = 1
                        ativarInimigo()
                    }
                }
            }

        }

        function efetivo() {
            atk.style.color = 'rgb(142, 245, 78)';
            atkNum.style.color = 'rgb(142, 245, 78)';
            atkType.style.color = 'rgb(142, 245, 78)';

            if (battleCard1[0] <= 5) {
                battleCard2[1] -= battleCard1[0] + 1
            } else if (battleCard1[0] <= 7) {
                battleCard2[1] -= battleCard1[0] + 2
            } else if (battleCard1[0] <= 9) {
                battleCard2[1] -= battleCard1[0] + 3
            }

        }

        function efetivoColor() {
            atk.style.color = 'rgb(142, 245, 78)';
            atkNum.style.color = 'rgb(142, 245, 78)';
            atkType.style.color = 'rgb(142, 245, 78)';
        }

        function nefetivo() {
            atk.style.color = 'rgb(245, 78, 78)';
            atkNum.style.color = 'rgb(245, 78, 78)';
            atkType.style.color = 'rgb(245, 78, 78)';

            if (battleCard1[0] <= 5) {
                battleCard2[1] -= battleCard1[0] - 1
            } else if (battleCard1[0] <= 7) {
                battleCard2[1] -= battleCard1[0] - 2
            } else if (battleCard1[0] <= 9) {
                battleCard2[1] -= battleCard1[0] - 3
            }

        }

        function nefetivoColor() {
            atk.style.color = 'rgb(245, 78, 78)';
            atkNum.style.color = 'rgb(245, 78, 78)';
            atkType.style.color = 'rgb(245, 78, 78)';
        }

        function INIefetivo() {
            atkInimigo.style.color = 'rgb(142, 245, 78)';
            atkNumInimigo.style.color = 'rgb(142, 245, 78)';
            atkTypeInimigo.style.color = 'rgb(142, 245, 78)';

            if (battleCard2[0] <= 5) {
                battleCard1[1] -= battleCard2[0] + 1
            } else if (battleCard2[0] <= 7) {
                battleCard1[1] -= battleCard2[0] + 2
            } else if (battleCard2[0] <= 9) {
                battleCard1[1] -= battleCard2[0] + 3
            }

        }

        function INIefetivoColor() {
            atkInimigo.style.color = 'rgb(142, 245, 78)';
            atkNumInimigo.style.color = 'rgb(142, 245, 78)';
            atkTypeInimigo.style.color = 'rgb(142, 245, 78)';
        }

        function INInefetivo() {
            atkInimigo.style.color = 'rgb(245, 78, 78)';
            atkNumInimigo.style.color = 'rgb(245, 78, 78)';
            atkTypeInimigo.style.color = 'rgb(245, 78, 78)';

            if (battleCard2[0] <= 5) {
                battleCard1[1] -= battleCard2[0] - 1
            } else if (battleCard2[0] <= 7) {
                battleCard1[1] -= battleCard2[0] - 2
            } else if (battleCard2[0] <= 9) {
                battleCard1[1] -= battleCard2[0] - 3
            }

        }

        function INInefetivoColor() {
            atkInimigo.style.color = 'rgb(245, 78, 78)';
            atkNumInimigo.style.color = 'rgb(245, 78, 78)';
            atkTypeInimigo.style.color = 'rgb(245, 78, 78)';
        }

        function efetivoComum() {
            atk.style.color = '';
            atkNum.style.color = '';
            atkType.style.color = '';

            battleCard2[1] -= battleCard1[0]

        }

        function efetivoComumColor() {
            atk.style.color = '';
            atkNum.style.color = '';
            atkType.style.color = '';
        }

        function INIefetivoComum() {
            atkInimigo.style.color = '';
            atkNumInimigo.style.color = '';
            atkTypeInimigo.style.color = '';

            battleCard1[1] -= battleCard2[0]

        }

        function INIefetivoComumColor() {
            atkInimigo.style.color = '';
            atkNumInimigo.style.color = '';
            atkTypeInimigo.style.color = '';
        }

        function efeitos() {
            //TIPO
            if (stats[0] === 'gras') {
                //EFETIVO
                if (INIstats[1] === 'wate' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'fire' || INIstats[1] === 'flyi' || INIstats[1] === 'bug' || INIstats[1] === 'pois' || INIstats[1] === 'ice') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'wate') {
                //EFETIVO
                if (INIstats[1] === 'fire' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'gras' || INIstats[1] === 'elec') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'fire') {
                //EFETIVO
                if (INIstats[1] === 'gras' || INIstats[1] === 'bug' || INIstats[1] === 'ice' || INIstats[1] === 'stee') {
                    efetivo()
                    //NAO EFETIVO
                }  else if (INIstats[1] === 'wate' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    console.log('alguma coisa')
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'norm') {
                //NAO EFETIVO
                if (INIstats[1] === 'figh') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'figh') {
                //EFETIVO
                if (INIstats[1] === 'norm' || INIstats[1] === 'rock' || INIstats[1] === 'ice' || INIstats[1] === 'stee' || INIstats[1] === 'dark') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'psyc' || INIstats[1] === 'fair' || INIstats[1] === 'flyi') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'elec') {
                //EFETIVO
                if (INIstats[1] === 'wate' || INIstats[1] === 'flyi') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'grou') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'flyi') {
                //EFETIVO
                if (INIstats[1] === 'figh' || INIstats[1] === 'gras' || INIstats[1] === 'bug') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'elec' || INIstats[1] === 'ice' || INIstats[1] === 'rock') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'grou') {
                //EFETIVO
                if (INIstats[1] === 'elec' || INIstats[1] === 'fire' || INIstats[1] === 'pois' || INIstats[1] === 'rock' || INIstats[1] === 'stee') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'wate' || INIstats[1] === 'gras' || INIstats[1] === 'ice') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'rock') {
                //EFETIVO
                if (INIstats[1] === 'fire' || INIstats[1] === 'bug' || INIstats[1] === 'flyi' || INIstats[1] === 'ice') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'wate' || INIstats[1] === 'gras' || INIstats[1] === 'figh' || INIstats[1] === 'grou' || INIstats[1] === 'stee') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'psyc') {
                //EFETIVO
                if (INIstats[1] === 'figh' || INIstats[1] === 'pois') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'bug' || INIstats[1] === 'ghos' || INIstats[1] === 'dark') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'ghos') {
                //EFETIVO
                if (INIstats[1] === 'psyc' || INIstats[1] === 'ghos') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'ghos' || INIstats[1] === 'dark') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'dark') {
                //EFETIVO
                if (INIstats[1] === 'psyc' || INIstats[1] === 'ghos') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'figh' || INIstats[1] === 'bug' || INIstats[1] === 'fair') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'bug') {
                //EFETIVO
                if (INIstats[1] === 'gras' || INIstats[1] === 'psyc' || INIstats[1] === 'dark') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'fire' || INIstats[1] === 'flyi' || INIstats[1] === 'rock') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'pois') {
                //EFETIVO
                if (INIstats[1] === 'gras' || INIstats[1] === 'fair') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'grou' || INIstats[1] === 'psyc') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'stee') {
                //EFETIVO
                if (INIstats[1] === 'ice' || INIstats[1] === 'rock' || INIstats[1] === 'fair') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'fire' || INIstats[1] === 'figh' || INIstats[1] === 'grou') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'ice') {
                //EFETIVO
                if (INIstats[1] === 'gras' || INIstats[1] === 'grou' || INIstats[1] === 'flyi' || INIstats[1] === 'drag') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'fire' || INIstats[1] === 'figh' || INIstats[1] === 'rock' || INIstats[1] === 'stee') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'drag') {
                //EFETIVO
                if (INIstats[1] === 'drag') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'drag' || INIstats[1] === 'fair') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'fair') {
                //EFETIVO
                if (INIstats[1] === 'drag' || INIstats[1] === 'figh' || INIstats[1] === 'dark') {
                    efetivo()
                    //NAO EFETIVO
                } else if (INIstats[1] === 'pois' || INIstats[1] === 'stee') {
                    nefetivo()

                } else {
                    efetivoComum()
                }
            }
        }



        function INIefeitos() {
            //TIPO
            if (stats[0] === 'gras') {
                //EFETIVO
                if (stats[1] === 'wate' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'fire' || stats[1] === 'flyi' || stats[1] === 'bug' || stats[1] === 'pois' || stats[1] === 'ice') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'wate') {
                //EFETIVO
                if (stats[1] === 'fire' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'gras' || stats[1] === 'elec') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'fire') {
                //EFETIVO
                if (stats[1] === 'gras' || stats[1] === 'bug' || stats[1] === 'ice' || stats[1] === 'stee') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'wate' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'norm') {
                //NAO EFETIVO
                if (stats[1] === 'figh') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'figh') {
                //EFETIVO
                if (stats[1] === 'norm' || stats[1] === 'rock' || stats[1] === 'ice' || stats[1] === 'stee' || stats[1] === 'dark') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'psyc' || stats[1] === 'fair' || stats[1] === 'flyi') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'elec') {
                //EFETIVO
                if (stats[1] === 'wate' || stats[1] === 'flyi') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'grou') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'flyi') {
                //EFETIVO
                if (stats[1] === 'figh' || stats[1] === 'gras' || stats[1] === 'bug') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'elec' || stats[1] === 'ice' || stats[1] === 'rock') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'grou') {
                //EFETIVO
                if (stats[1] === 'elec' || stats[1] === 'fire' || stats[1] === 'pois' || stats[1] === 'rock' || stats[1] === 'stee') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'wate' || stats[1] === 'gras' || stats[1] === 'ice') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'rock') {
                //EFETIVO
                if (stats[1] === 'fire' || stats[1] === 'bug' || stats[1] === 'flyi' || stats[1] === 'ice') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'wate' || stats[1] === 'gras' || stats[1] === 'figh' || stats[1] === 'grou' || stats[1] === 'stee') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'psyc') {
                //EFETIVO
                if (stats[1] === 'figh' || stats[1] === 'pois') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'bug' || stats[1] === 'ghos' || stats[1] === 'dark') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'ghos') {
                //EFETIVO
                if (stats[1] === 'psyc' || stats[1] === 'ghos') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'ghos' || stats[1] === 'dark') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'dark') {
                //EFETIVO
                if (stats[1] === 'psyc' || stats[1] === 'ghos') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'figh' || stats[1] === 'bug' || stats[1] === 'fair') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'bug') {
                //EFETIVO
                if (stats[1] === 'gras' || stats[1] === 'psyc' || stats[1] === 'dark') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'fire' || stats[1] === 'flyi' || stats[1] === 'rock') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'pois') {
                //EFETIVO
                if (stats[1] === 'gras' || stats[1] === 'fair') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'grou' || stats[1] === 'psyc') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'stee') {
                //EFETIVO
                if (stats[1] === 'ice' || stats[1] === 'rock' || stats[1] === 'fair') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'fire' || stats[1] === 'figh' || stats[1] === 'grou') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'ice') {
                //EFETIVO
                if (stats[1] === 'gras' || stats[1] === 'grou' || stats[1] === 'flyi' || stats[1] === 'drag') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'fire' || stats[1] === 'figh' || stats[1] === 'rock' || stats[1] === 'stee') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'drag') {
                //EFETIVO
                if (stats[1] === 'drag') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'drag' || stats[1] === 'fair') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
            //TIPO
            if (stats[0] === 'fair') {
                //EFETIVO
                if (stats[1] === 'drag' || stats[1] === 'figh' || stats[1] === 'dark') {
                    INIefetivo()
                    //NAO EFETIVO
                } else if (stats[1] === 'pois' || stats[1] === 'stee') {
                    INInefetivo()

                } else {
                    INIefetivoComum()
                }
            }
        }













        function efeitos2() {

            if (stats[0] === 'gras') {
                if (INIstats[1] === 'wate' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    efetivoColor()

                } else if (INIstats[1] === 'fire' || INIstats[1] === 'flyi' || INIstats[1] === 'bug' || INIstats[1] === 'pois' || INIstats[1] === 'ice') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'wate') {
                if (INIstats[1] === 'fire' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    efetivoColor()

                } else if (INIstats[1] === 'gras' || INIstats[1] === 'elec') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'fire') {
                if (INIstats[1] === 'gras' || INIstats[1] === 'bug' || INIstats[1] === 'ice' || INIstats[1] === 'stee') {
                    efetivoColor()

                } else if (INIstats[1] === 'wate' || INIstats[1] === 'grou' || INIstats[1] === 'rock') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'norm') {
                if (INIstats[1] === 'figh') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'figh') {
                if (INIstats[1] === 'norm' || INIstats[1] === 'rock' || INIstats[1] === 'ice' || INIstats[1] === 'stee' || INIstats[1] === 'dark') {
                    efetivoColor()

                } else if (INIstats[1] === 'psyc' || INIstats[1] === 'fair' || INIstats[1] === 'flyi') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'elec') {
                if (INIstats[1] === 'wate' || INIstats[1] === 'flyi') {
                    efetivoColor()

                } else if (INIstats[1] === 'grou') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'flyi') {
                if (INIstats[1] === 'figh' || INIstats[1] === 'gras' || INIstats[1] === 'bug') {
                    efetivoColor()

                } else if (INIstats[1] === 'elec' || INIstats[1] === 'ice' || INIstats[1] === 'rock') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'grou') {
                if (INIstats[1] === 'elec' || INIstats[1] === 'fire' || INIstats[1] === 'pois' || INIstats[1] === 'rock' || INIstats[1] === 'stee') {
                    efetivoColor()

                } else if (INIstats[1] === 'wate' || INIstats[1] === 'gras' || INIstats[1] === 'ice') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'rock') {
                if (INIstats[1] === 'fire' || INIstats[1] === 'bug' || INIstats[1] === 'flyi' || INIstats[1] === 'ice') {
                    efetivoColor()

                } else if (INIstats[1] === 'wate' || INIstats[1] === 'gras' || INIstats[1] === 'figh' || INIstats[1] === 'grou' || INIstats[1] === 'stee') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'psyc') {
                if (INIstats[1] === 'figh' || INIstats[1] === 'pois') {
                    efetivoColor()

                } else if (INIstats[1] === 'bug' || INIstats[1] === 'ghos' || INIstats[1] === 'dark') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'ghos') {
                if (INIstats[1] === 'psyc' || INIstats[1] === 'ghos') {
                    efetivoColor()

                } else if (INIstats[1] === 'ghos' || INIstats[1] === 'dark') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'dark') {
                if (INIstats[1] === 'psyc' || INIstats[1] === 'ghos') {
                    efetivoColor()

                } else if (INIstats[1] === 'figh' || INIstats[1] === 'bug' || INIstats[1] === 'fair') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'bug') {
                if (INIstats[1] === 'gras' || INIstats[1] === 'psyc' || INIstats[1] === 'dark') {
                    efetivoColor()

                } else if (INIstats[1] === 'fire' || INIstats[1] === 'flyi' || INIstats[1] === 'rock') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'pois') {
                if (INIstats[1] === 'gras' || INIstats[1] === 'fair') {
                    efetivoColor()

                } else if (INIstats[1] === 'grou' || INIstats[1] === 'psyc') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'stee') {
                if (INIstats[1] === 'ice' || INIstats[1] === 'rock' || INIstats[1] === 'fair') {
                    efetivoColor()

                } else if (INIstats[1] === 'fire' || INIstats[1] === 'figh' || INIstats[1] === 'grou') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'ice') {
                if (INIstats[1] === 'gras' || INIstats[1] === 'grou' || INIstats[1] === 'flyi' || INIstats[1] === 'drag') {
                    efetivoColor()

                } else if (INIstats[1] === 'fire' || INIstats[1] === 'figh' || INIstats[1] === 'rock' || INIstats[1] === 'stee') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'drag') {
                if (INIstats[1] === 'drag') {
                    efetivoColor()

                } else if (INIstats[1] === 'drag' || INIstats[1] === 'fair') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }

            if (stats[0] === 'fair') {
                if (INIstats[1] === 'drag' || INIstats[1] === 'figh' || INIstats[1] === 'dark') {
                    efetivoColor()

                } else if (INIstats[1] === 'pois' || INIstats[1] === 'stee') {
                    nefetivoColor()

                } else {
                    efetivoComumColor()
                }
            }
        } setInterval(efeitos2, 100)



        function INIefeitos2() {
            if (stats[0] === 'gras') {
                if (stats[1] === 'wate' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INIefetivoColor()

                } else if (stats[1] === 'fire' || stats[1] === 'flyi' || stats[1] === 'bug' || stats[1] === 'pois' || stats[1] === 'ice') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'wate') {
                if (stats[1] === 'fire' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INIefetivoColor()

                } else if (stats[1] === 'gras' || stats[1] === 'elec') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'fire') {
                if (stats[1] === 'gras' || stats[1] === 'bug' || stats[1] === 'ice' || stats[1] === 'stee') {
                    INIefetivoColor()

                } else if (stats[1] === 'wate' || stats[1] === 'grou' || stats[1] === 'rock') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'norm') {
                if (stats[1] === 'figh') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'figh') {
                if (stats[1] === 'norm' || stats[1] === 'rock' || stats[1] === 'ice' || stats[1] === 'stee' || stats[1] === 'dark') {
                    INIefetivoColor()

                } else if (stats[1] === 'psyc' || stats[1] === 'fair' || stats[1] === 'flyi') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'elec') {
                if (stats[1] === 'wate' || stats[1] === 'flyi') {
                    INIefetivoColor()

                } else if (stats[1] === 'grou') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'flyi') {
                if (stats[1] === 'figh' || stats[1] === 'gras' || stats[1] === 'bug') {
                    INIefetivoColor()

                } else if (stats[1] === 'elec' || stats[1] === 'ice' || stats[1] === 'rock') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'grou') {
                if (stats[1] === 'elec' || stats[1] === 'fire' || stats[1] === 'pois' || stats[1] === 'rock' || stats[1] === 'stee') {
                    INIefetivoColor()

                } else if (stats[1] === 'wate' || stats[1] === 'gras' || stats[1] === 'ice') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'rock') {
                if (stats[1] === 'fire' || stats[1] === 'bug' || stats[1] === 'flyi' || stats[1] === 'ice') {
                    INIefetivoColor()

                } else if (stats[1] === 'wate' || stats[1] === 'gras' || stats[1] === 'figh' || stats[1] === 'grou' || stats[1] === 'stee') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'psyc') {
                if (stats[1] === 'figh' || stats[1] === 'pois') {
                    INIefetivoColor()

                } else if (stats[1] === 'bug' || stats[1] === 'ghos' || stats[1] === 'dark') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'ghos') {
                if (stats[1] === 'psyc' || stats[1] === 'ghos') {
                    INIefetivoColor()

                } else if (stats[1] === 'ghos' || stats[1] === 'dark') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'dark') {
                if (stats[1] === 'psyc' || stats[1] === 'ghos') {
                    INIefetivoColor()

                } else if (stats[1] === 'figh' || stats[1] === 'bug' || stats[1] === 'fair') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'bug') {
                if (stats[1] === 'gras' || stats[1] === 'psyc' || stats[1] === 'dark') {
                    INIefetivoColor()

                } else if (stats[1] === 'fire' || stats[1] === 'flyi' || stats[1] === 'rock') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'pois') {
                if (stats[1] === 'gras' || stats[1] === 'fair') {
                    INIefetivoColor()

                } else if (stats[1] === 'grou' || stats[1] === 'psyc') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'stee') {
                if (stats[1] === 'ice' || stats[1] === 'rock' || stats[1] === 'fair') {
                    INIefetivoColor()

                } else if (stats[1] === 'fire' || stats[1] === 'figh' || stats[1] === 'grou') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'ice') {
                if (stats[1] === 'gras' || stats[1] === 'grou' || stats[1] === 'flyi' || stats[1] === 'drag') {
                    INIefetivoColor()

                } else if (stats[1] === 'fire' || stats[1] === 'figh' || stats[1] === 'rock' || stats[1] === 'stee') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'drag') {
                if (stats[1] === 'drag') {
                    INIefetivoColor()

                } else if (stats[1] === 'drag' || stats[1] === 'fair') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
            if (stats[0] === 'fair') {
                if (stats[1] === 'drag' || stats[1] === 'figh' || stats[1] === 'dark') {
                    INIefetivoColor()

                } else if (stats[1] === 'pois' || stats[1] === 'stee') {
                    INInefetivoColor()

                } else {
                    INIefetivoComumColor()
                }
            }
        } setInterval(INIefeitos2, 100)



        function proxRodada() {



            efeitos()
            INIefeitos()

            battle_bg.style.backgroundColor = 'rgb(132, 107, 156)';

            setTimeout(() => {
                battle_bg.style.backgroundColor = '';
            }, 100)
            rodada += 1

            cooldownInimigo()


            cliques = true
            setTimeout(() => {
                ativarInimigo()
                fim()
            }, 500)
            cooldown()
        }

    }

    attack.addEventListener('click', function () {
        if (ATAQUE) {
            ATAQUE = false
            proxRodada()
            setTimeout(() => {
                morte()
            }, 100)
            attack.style.color = 'rgb(45, 45, 45)'
            attack.style.backgroundColor = 'rgb(90, 90, 90)';
            attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            setTimeout(() => {
                if (cartaAtual === carta1 && c1viva) {
                    ATAQUE = true
                    attack.style.backgroundColor = '';
                    attack.style.border = '';
                    attack.style.color = ''
                } if (cartaAtual === carta2 && c2viva) {
                    ATAQUE = true
                    attack.style.backgroundColor = '';
                    attack.style.border = '';
                    attack.style.color = ''
                } if (cartaAtual === carta3 && c3viva) {
                    ATAQUE = true
                    attack.style.backgroundColor = '';
                    attack.style.border = '';
                    attack.style.color = ''
                }
            }, 900)



        }
    })


    function cooldownInimigo() {
        if (tradeCooldownInimigo != 0) {
            tradeCooldownInimigo -= 1
        }
        if (tradeCooldownInimigo === 0) {
            numeroDecimal = Math.random();
            numeroAleatorio = Math.floor(numeroDecimal * 3) + 1;
            if (numeroAleatorio === 1 && c1vivaInimigo) {
                cartaTroca = cartaInimiga1
                if (cartaTroca === cartaAtualInimigo) {

                    tradeCooldownInimigo = 0
                } else {
                    tradeCooldownInimigo = 2
                }
            } else {
                if (numeroAleatorio === 2 && c2vivaInimigo) {
                    cartaTroca = cartaInimiga2
                    if (cartaTroca === cartaAtualInimigo) {

                        tradeCooldownInimigo = 0
                    } else {
                        tradeCooldownInimigo = 2
                    }
                } else {
                    if (numeroAleatorio === 3 && c3vivaInimigo) {
                        cartaTroca = cartaInimiga3
                        if (cartaTroca === cartaAtualInimigo) {

                            tradeCooldownInimigo = 0
                        } else {
                            tradeCooldownInimigo = 2
                        }
                    }
                }
            }
        }
    }

    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// ///////////////////  
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// ///////////////////   

    function escolherTroca() {

        TROCA = true
        ATAQUE = false
        trade.addEventListener('click', sairTroca)
        botaoTroca = true
        if (cartaAtual === carta1 && tradeCooldown === 0) {
            battle_transition.style.opacity = '0.8';
            battle_transition.style.zIndex = '30';
            attack.style.color = 'rgb(45, 45, 45)'
            attack.style.backgroundColor = 'rgb(90, 90, 90)';
            attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            trade.style.zIndex = '31';
            carta2.style.marginTop = '78vh';
            carta2.style.width = '14vw';
            carta2.style.height = '38vh';
            carta3.style.marginTop = '78vh';
            carta3.style.width = '14vw';
            carta3.style.height = '38vh';
            carta2.addEventListener("mouseenter", carta2hover)
            carta3.addEventListener("mouseenter", carta3hover)
            carta2.addEventListener("mouseleave", carta2hoverout)
            carta3.addEventListener("mouseleave", carta3hoverout)
        } if (cartaAtual === carta2 && tradeCooldown === 0) {
            battle_transition.style.opacity = '0.8';
            battle_transition.style.zIndex = '30';
            attack.style.color = 'rgb(45, 45, 45)'
            attack.style.backgroundColor = 'rgb(90, 90, 90)';
            attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            trade.style.zIndex = '31';
            carta1.style.marginTop = '78vh';
            carta1.style.width = '14vw';
            carta1.style.height = '38vh';
            carta3.style.marginTop = '78vh';
            carta3.style.width = '14vw';
            carta3.style.height = '38vh';
            carta1.addEventListener("mouseenter", carta1hover)
            carta3.addEventListener("mouseenter", carta3hover)
            carta1.addEventListener("mouseleave", carta1hoverout)
            carta3.addEventListener("mouseleave", carta3hoverout)
        } if (cartaAtual === carta3 && tradeCooldown === 0) {
            battle_transition.style.opacity = '0.8';
            battle_transition.style.zIndex = '30';
            attack.style.color = 'rgb(45, 45, 45)'
            attack.style.backgroundColor = 'rgb(90, 90, 90)';
            attack.style.border = '0.5vw solid rgb(43, 43, 43)';
            trade.style.zIndex = '31';
            carta1.style.marginTop = '78vh';
            carta1.style.width = '14vw';
            carta1.style.height = '38vh';
            carta2.style.marginTop = '78vh';
            carta2.style.width = '14vw';
            carta2.style.height = '38vh';
            carta1.addEventListener("mouseenter", carta1hover)
            carta2.addEventListener("mouseenter", carta2hover)
            carta1.addEventListener("mouseleave", carta1hoverout)
            carta2.addEventListener("mouseleave", carta2hoverout)
        }
        setTimeout(() => {
            trade.removeEventListener('click', escolherTroca)
        }, 100)
    }

    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 

    function sairTroca() {

        if (cartaAtual === carta1 && c1viva) {
            ATAQUE = true
            attack.style.color = ''
            attack.style.backgroundColor = '';
            attack.style.border = '';
        } if (cartaAtual === carta2 && c2viva) {
            ATAQUE = true
            attack.style.color = ''
            attack.style.backgroundColor = '';
            attack.style.border = '';
        } if (cartaAtual === carta3 && c3viva) {
            ATAQUE = true
            attack.style.color = ''
            attack.style.backgroundColor = '';
            attack.style.border = '';
        }
        trade.addEventListener('click', escolherTroca)
        TROCA = false
        botaoTroca = false
        battle_transition.style.opacity = '';
        battle_transition.style.zIndex = '';
        carta1.removeEventListener("mouseenter", carta1hover)
        carta2.removeEventListener("mouseenter", carta2hover)
        carta3.removeEventListener("mouseenter", carta3hover)
        carta1.removeEventListener("mouseleave", carta1hoverout)
        carta2.removeEventListener("mouseleave", carta2hoverout)
        carta3.removeEventListener("mouseleave", carta3hoverout)
        carta1.style.border = 'none';
        carta2.style.border = 'none';
        carta3.style.border = 'none';
        setTimeout(() => {
            if (cartaAtual === 1) {
                carta1.style.transform = '';
            } if (cartaAtual === 2) {
                carta2.style.transform = '';
            } if (cartaAtual === 3) {
                carta3.style.transform = '';
            }
        }, 300)
        if (cartaAtual === carta1) {
            carta2.style.marginTop = '83vh';
            carta2.style.width = '12vw';
            carta2.style.height = '35vh';
            carta3.style.marginTop = '85vh';
            carta3.style.width = '12vw';
            carta3.style.height = '35vh';
        } if (cartaAtual === carta2) {
            carta1.style.marginTop = '85vh';
            carta1.style.width = '12vw';
            carta1.style.height = '35vh';
            carta3.style.marginTop = '83vh';
            carta3.style.width = '12vw';
            carta3.style.height = '35vh';
        } if (cartaAtual === carta3) {
            carta1.style.marginTop = '85vh';
            carta1.style.width = '12vw';
            carta1.style.height = '35vh';
            carta2.style.marginTop = '83vh';
            carta2.style.width = '12vw';
            carta2.style.height = '35vh';
        }
        setTimeout(() => {
            trade.removeEventListener('click', sairTroca)
        }, 100)
    }

    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 
    /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// 


    function reset() {

        setTimeout(() => {

            trade.style.color = 'rgb(45, 45, 45)'
            trade.style.backgroundColor = 'rgb(90, 90, 90)';
            trade.style.border = '0.5vw solid rgb(43, 43, 43)';
            trade.removeEventListener('click', escolherTroca)
            trade.removeEventListener('click', sairTroca)

            ATAQUE = true
            attack.style.color = ''
            attack.style.backgroundColor = '';
            attack.style.border = '';
        }, 100)
        TROCA = false

        tradeCooldown = 2
        battle_transition.style.opacity = '';
        battle_transition.style.zIndex = '';
        carta1.removeEventListener("mouseenter", carta1hover)
        carta2.removeEventListener("mouseenter", carta2hover)
        carta3.removeEventListener("mouseenter", carta3hover)
        carta1.removeEventListener("mouseleave", carta1hoverout)
        carta2.removeEventListener("mouseleave", carta2hoverout)
        carta3.removeEventListener("mouseleave", carta3hoverout)
        carta1.style.border = 'none';
        carta2.style.border = 'none';
        carta3.style.border = 'none';
        atkInfo.style.opacity = '';
        atkNumInfo.style.opacity = '';
        atkTypeInfo.style.opacity = '';
        defInfo.style.opacity = '';
        defNumInfo.style.opacity = '';
        defTypeInfo.style.opacity = '';
        atkInfo.style.zIndex = '';
        atkNumInfo.style.zIndex = '';
        atkTypeInfo.style.zIndex = '';
        defInfo.style.zIndex = '';
        defNumInfo.style.zIndex = '';
        defTypeInfo.style.zIndex = '';
        setTimeout(() => {
            if (cartaAtual === 1) {
                carta1.style.transform = '';
            } if (cartaAtual === 2) {
                carta2.style.transform = '';
            } if (cartaAtual === 3) {
                carta3.style.transform = '';
            }
        }, 300)


    }


    function cooldown() {
        if (tradeCooldown != 0) {
            tradeCooldown -= 1

            if (tradeCooldown === 0) {
                TROCA = false
                trade.addEventListener('click', escolherTroca)
                trade.style.color = ''
                trade.style.backgroundColor = '';
                trade.style.border = '';

            } else if (tradeCooldown != 0) {
                console.log('tadrecooldown != 0')
                setTimeout(() => {
                    if (cartaAtual === carta1) {
                        setTimeout(() => {
                            if (c1viva) {
                                console.log('CARTA 1')
                                trade.style.color = 'rgb(45, 45, 45)'
                                trade.style.backgroundColor = 'rgb(90, 90, 90)';
                                trade.style.border = '0.5vw solid rgb(43, 43, 43)';
                                trade.removeEventListener('click', escolherTroca)
                                trade.removeEventListener('click', sairTroca)
                                ATAQUE = true
                                attack.style.backgroundColor = '';
                                attack.style.border = '';
                                attack.style.color = ''
                            } else {
                                TROCA = false
                                trade.addEventListener('click', escolherTroca)
                                trade.style.color = ''
                                trade.style.backgroundColor = '';
                                trade.style.border = '';

                            }
                        }, 500)
                    } if (cartaAtual === carta2) {
                        setTimeout(() => {
                            if (c2viva) {
                                console.log('CARTA 2')
                                trade.style.color = 'rgb(45, 45, 45)'
                                trade.style.backgroundColor = 'rgb(90, 90, 90)';
                                trade.style.border = '0.5vw solid rgb(43, 43, 43)';
                                trade.removeEventListener('click', escolherTroca)
                                trade.removeEventListener('click', sairTroca)
                                ATAQUE = true
                                attack.style.backgroundColor = '';
                                attack.style.border = '';
                                attack.style.color = ''
                            } else {
                                TROCA = false
                                trade.addEventListener('click', escolherTroca)
                                trade.style.color = ''
                                trade.style.backgroundColor = '';
                                trade.style.border = '';

                            }
                        }, 500)
                    } if (cartaAtual === carta3) {
                        setTimeout(() => {
                            if (c3viva) {
                                console.log('CARTA 3')
                                trade.style.color = 'rgb(45, 45, 45)'
                                trade.style.backgroundColor = 'rgb(90, 90, 90)';
                                trade.style.border = '0.5vw solid rgb(43, 43, 43)';
                                trade.removeEventListener('click', escolherTroca)
                                trade.removeEventListener('click', sairTroca)
                                ATAQUE = true
                                attack.style.backgroundColor = '';
                                attack.style.border = '';
                                attack.style.color = ''

                            } else {
                                TROCA = false
                                trade.addEventListener('click', escolherTroca)
                                trade.style.color = ''
                                trade.style.backgroundColor = '';
                                trade.style.border = '';

                            }
                        }, 500)
                    }
                }, 1000)
            }



        } else if (tradeCooldown === 0) {

            TROCA = false
            trade.addEventListener('click', escolherTroca)
            trade.style.color = ''
            trade.style.backgroundColor = '';
            trade.style.border = '';

        }


    }

    function restart() {
        cartaAtual = 0
        nomeCartaInimigo = 0
        cartaAtualInimigo = 0
        resetarImagens = true
        subs = true
        cliques = true
        clique1 = true
        clique2 = true
        clique3 = true
        numeroDecimal = 0
        numeroAleatorio = 0
        rodada = 0
        cartaTroca = 0
        botaoTroca = false
        TROCA = true
        ATAQUE = true
        tradeCooldown = 3
        tradeCooldownInimigo = 2
        c1viva = true
        c2viva = true
        c3viva = true
        c1vivaInimigo = true
        c2vivaInimigo = true
        c3vivaInimigo = true
        cartasInimigasMortas = 0
        cartasMortas = 0

        setTimeout(() => {

            battle_transition.style.opacity = '1';
            battle_transition.style.zIndex = '50'
            battle_bg.style.opacity = '';
            battle_bg2.style.opacity = '';
            batalhaEscolha.style.opacity = '';
            carta1.style.opacity = '';
            carta2.style.opacity = '';
            carta3.style.opacity = '';
            cartaInimiga1.style.opacity = '';
            cartaInimiga2.style.opacity = '';
            cartaInimiga3.style.opacity = '';
            carta1.style.zIndex = '';
            carta2.style.zIndex = '';
            carta3.style.zIndex = '';
            attack.style.opacity = '';
            attack.style.zIndex = '';
            trade.style.opacity = '';
            trade.style.zIndex = '';
            nome.style.opacity = '';
            atk.style.opacity = '';
            atkNum.style.opacity = '';
            atkType.style.opacity = '';
            def.style.opacity = '';
            defNum.style.opacity = '';
            defType.style.opacity = '';
            nomeInimigo.style.opacity = '';
            atkInimigo.style.opacity = '';
            atkNumInimigo.style.opacity = '';
            atkTypeInimigo.style.opacity = '';
            defInimigo.style.opacity = '';
            defNumInimigo.style.opacity = '';
            defTypeInimigo.style.opacity = '';
            batalhaEscolha.style.opacity = '';
            carta3.style.width = '';
            carta3.style.height = '';
            carta3.style.marginTop = '';
            carta3.style.marginLeft = '';
            carta3.style.transform = '';
            carta3.style.opacity = '';
            carta2.style.width = '';
            carta2.style.height = '';
            carta2.style.marginTop = '';
            carta2.style.marginLeft = '';
            carta2.style.transform = '';
            carta2.style.opacity = '';
            carta1.style.width = '';
            carta1.style.height = '';
            carta1.style.marginTop = '';
            carta1.style.marginLeft = '';
            carta1.style.transform = '';
            carta1.style.opacity = '';
            carta1.style.filter = '';
            carta2.style.filter = '';
            carta3.style.filter = '';
            cartaInimiga1.style.filter = '';
            cartaInimiga2.style.filter = '';
            cartaInimiga3.style.filter = '';
            cartaInimiga3.style.transform = '';
            cartaInimiga3.style.border = '';
            cartaInimiga3.style.backgroundImage = 'qhg';
            cartaInimiga3.style.width = '';
            cartaInimiga3.style.height = '';
            cartaInimiga3.style.marginLeft = '';
            cartaInimiga3.style.marginTop = '';
            cartaInimiga2.style.width = '';
            cartaInimiga2.style.height = '';
            cartaInimiga2.style.marginTop = '';
            cartaInimiga2.style.marginLeft = '';
            cartaInimiga2.style.backgroundImage = 'qeh';
            cartaInimiga2.style.border = '';
            cartaInimiga2.style.transform = '';
            cartaInimiga1.style.width = '';
            cartaInimiga1.style.height = '';
            cartaInimiga1.style.marginTop = '';
            cartaInimiga1.style.marginLeft = '';
            cartaInimiga1.style.transform = ''
            cartaInimiga1.style.backgroundImage = 'qhqeh';
            cartaInimiga1.style.border = '';
            setTimeout(() => {
                battle_transition.style.opacity = ''
                battle_transition.style.zIndex = '1'
            }, 1000)


            eevee = [3, 15]
            yanmega = [2, 14]
            magmar = [5, 14]
            arcanine = [6, 19]
            coalossal = [7, 22]
            kingler = [3, 14]
            psyduck = [6, 18]
            poliwrath = [8, 21]
            oddish = [4, 14]
            leafeon = [5, 18]
            exeggutor = [9, 19]
            ekans = [4, 15]
            geodude = [2, 17]
            sandshrew = [4, 16]
            dragonair = [6, 19]
            gardevoir = [4, 16]
            arctovish = [5, 18]
            sableye = [7, 18]
            skarmory = [6, 20]
            pawmot = [8, 18]

            INIeevee = [3, 15]
            INIyanmega = [3, 14]
            INImagmar = [5, 14]
            INIarcanine = [6, 19]
            INIcoalossal = [8, 23]
            INIkingler = [3, 15]
            INIpsyduck = [5, 18]
            INIpoliwrath = [8, 21]
            INIoddish = [4, 13]
            INIleafeon = [5, 18]
            INIexeggutor = [9, 19]
            INIekans = [4, 12]
            INIgeodude = [2, 17]
            INIsandshrew = [3, 16]
            INIdragonair = [6, 17]
            INIgardevoir = [4, 15]
            INIarctovish = [5, 16]
            INIsableye = [7, 18]
            INIskarmory = [6, 20]
            INIpawmot = [8, 18]
            stats = [0, 0]
            INIstats = [0, 0]



            moving = true
            perdeu = true
            setTimeout(() => {
                perdeu = false
                batalhando1 = false
            }, 8000)
        }, 300)

    }

    function fim() {
        if (vitorias1 >= 2) {
            cartasMortas = 0
            cartasInimigasMortas = 0
            battle_transition.style.zIndex = '50'
            battle_transition.style.opacity = '1'
            telaVitoria.style.zIndex = '51'
            telaVitoria.style.opacity = '1'
            // if (card1 === 'magmar') {
            //     card1 = 'arcanine'
            //     battleCard1 = card1
            // } if (card1 === 'oddish') {
            //     card1 = 'leafeon'
            //     battleCard1 = card1
            // } if (card1 === 'kingler') {
            //     card1 = 'psyduck'
            //     battleCard1 = card1
            // }
        } if (vitorias2 >= 2) {
            if (card1 === 'arcanine') {
                card1 = 'coalossal'
                battleCard1 = card1
            } if (card1 === 'leafeon') {
                card1 = 'exeggutor'
                battleCard1 = card1
            } if (card1 === 'psyduck') {
                card1 = 'poliwrath'
                battleCard1 = card1
            }
        }if (vitorias3 >= 2) {
            cartasMortas = 0
            cartasInimigasMortas = 0
            battle_transition.style.zIndex = '50'
            battle_transition.style.opacity = '1'
            telaVitoria.style.zIndex = '51'
            telaVitoria.style.opacity = '1'


        }
        if (cartasMortas === 3 && cartasInimigasMortas === 3) {

            empateMsg.style.opacity = '1';
            setTimeout(() => {
                empateMsg.style.opacity = '0';
            }, 3500)
            if (batalha1) {
                console.log('empate')
                vitorias1 += 0.5
            } if (batalha2) {
                vitorias2 += 0.5
            } if (batalha3) {
                vitorias3 += 0.5
            }

            console.log('VOCE VENCEU')
            restart()
        }
        else if (cartasInimigasMortas === 3 && cartasMortas != 3) {
            vitoriaMsg.style.opacity = '1';
            setTimeout(() => {
                vitoriaMsg.style.opacity = '0';
            }, 3500)
            if (batalha1) {
                console.log('VITORIA UHUUUUUUUUUUUUUUUUU')
                vitorias1 += 1
            } if (batalha2) {
                vitorias2 += 1
            } if (batalha3) {
                vitorias3 += 1
            }

            console.log('VOCE VENCEU')
            restart()

        }
        else if (cartasMortas === 3 && cartasInimigasMortas != 3) {
            derrotaMsg.style.opacity = '1';
            setTimeout(() => {
                derrotaMsg.style.opacity = '0';
            }, 3500)
            if (batalha1) {
                console.log('empate')
                vitorias1 += 0.3
            } if (batalha2) {
                vitorias2 += 0.3
            } if (batalha3) {
                vitorias3 += 0.3
            }
            console.log('VOCE PERDEU')
            restart()

        }

    } setInterval(fim, 100)


}







