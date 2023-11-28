const makeApiCall = async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    return response.data;

};


let dano
let defesa
let danoInimigo
let defesaInimigo

let card1 = ''
let card2 = 'eevee'
let card3 = 'yanmega'
let card4 = 'geodude'
let card5 = 'ekans'
let card6 = 'sandshrew'

let nomeCarta = card1
let cartaAtual
let nomeCartaInimigo
let cartaAtualInimigo
let cartaInfo


let battleCard1
let battleCard2

const cartas = [
    document.querySelector('.carta1'),
    document.querySelector('.carta2'),
    document.querySelector('.carta3')
];

let eevee = [3, 15]
let yanmega = [2, 14]
let magmar = [5, 14]
let arcanine = [6, 19]
let coalossal = [7, 22]
let kingler = [3, 14]
let psyduck = [6, 18]
let poliwrath = [8, 21]
let oddish = [4, 14]
let leafeon = [5, 18]
let exeggutor = [9, 19]
let ekans = [4, 15]
let geodude = [2, 17]
let sandshrew = [4, 16]
let dragonair = [6, 19]
let gardevoir = [4, 16]
let arctovish = [5, 18]
let sableye = [7, 18]
let skarmory = [6, 20]
let pawmot = [8, 18]

let INIeevee = [3, 15]
let INIyanmega = [3, 14]
let INImagmar = [5, 14]
let INIarcanine = [6, 19]
let INIcoalossal = [8, 23]
let INIkingler = [3, 15]
let INIpsyduck = [5, 18]
let INIpoliwrath = [8, 21]
let INIoddish = [4, 13]
let INIleafeon = [5, 18]
let INIexeggutor = [9, 19]
let INIekans = [4, 12]
let INIgeodude = [2, 17]
let INIsandshrew = [3, 16]
let INIdragonair = [6, 17]
let INIgardevoir = [4, 15]
let INIarctovish = [5, 16]
let INIsableye = [7, 18]
let INIskarmory = [6, 20]
let INIpawmot = [8, 18]
let stats = [0, 0]
let INIstats = [0, 0]


const dadosPokemon = async () => {


    ///////////////////////////////////////////////////////////////////////
    const eeveeData = await makeApiCall('eevee');
    eeveeNome = eeveeData.name;
    eeveeTipos = eeveeData.types.map((tipo) => tipo.type.name);
    const eeveeAlturaData = await makeApiCall('pikachu');
    eeveeAltura = eeveeAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const yanmegaData = await makeApiCall('yanmega');
    yanmegaNome = yanmegaData.name;
    yanmegaTipos = yanmegaData.types.map((tipo) => tipo.type.name);
    const yanmegaAlturaData = await makeApiCall('joltik');
    yanmegaAltura = yanmegaAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const oddishData = await makeApiCall('oddish');
    oddishNome = oddishData.name;
    oddishTipos = oddishData.types.map((tipo) => tipo.type.name);
    const oddishAlturaData = await makeApiCall('cubone');
    oddishAltura = oddishAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const leafeonData = await makeApiCall('leafeon');
    leafeonNome = leafeonData.name;
    leafeonTipos = leafeonData.types.map((tipo) => tipo.type.name);
    const leafeonAlturaData = await makeApiCall('machoke');
    leafeonAltura = leafeonAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const exeggutorData = await makeApiCall('exeggutor');
    exeggutorNome = exeggutorData.name;
    exeggutorTipos = exeggutorData.types.map((tipo) => tipo.type.name);
    const exeggutorAlturaData = await makeApiCall('lucario');
    exeggutorAltura = exeggutorAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const kinglerData = await makeApiCall('kingler');
    kinglerNome = kinglerData.name;
    kinglerTipos = kinglerData.types.map((tipo) => tipo.type.name);
    const kinglerAlturaData = await makeApiCall('pikachu');
    kinglerAltura = kinglerAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const psyduckData = await makeApiCall('psyduck');
    psyduckNome = psyduckData.name;
    psyduckTipos = psyduckData.types.map((tipo) => tipo.type.name);
    const psyduckAlturaData = await makeApiCall('lucario');
    psyduckAltura = psyduckAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const poliwrathData = await makeApiCall('poliwrath');
    poliwrathNome = poliwrathData.name;
    poliwrathTipos = poliwrathData.types.map((tipo) => tipo.type.name);
    const poliwrathAlturaData = await makeApiCall('lucario');
    poliwrathAltura = poliwrathAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const magmarData = await makeApiCall('magmar');
    magmarNome = magmarData.name;
    magmarTipos = magmarData.types.map((tipo) => tipo.type.name);
    const magmarAlturaData = await makeApiCall('jigglypuff');
    magmarAltura = magmarAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const arcanineData = await makeApiCall('arcanine');
    arcanineNome = arcanineData.name;
    arcanineTipos = arcanineData.types.map((tipo) => tipo.type.name);
    const arcanineAlturaData = await makeApiCall('tyranitar');
    arcanineAltura = arcanineAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const coalossalData = await makeApiCall('coalossal');
    coalossalNome = coalossalData.name;
    coalossalTipos = coalossalData.types.map((tipo) => tipo.type.name);
    const coalossalAlturaData = await makeApiCall('gyarados');
    coalossalAltura = coalossalAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const ekansData = await makeApiCall('ekans');
    ekansNome = ekansData.name;
    ekansTipos = ekansData.types.map((tipo) => tipo.type.name);
    const ekansAlturaData = await makeApiCall('gengar');
    ekansAltura = ekansAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const geodudeData = await makeApiCall('geodude');
    geodudeNome = geodudeData.name;
    geodudeTipos = geodudeData.types.map((tipo) => tipo.type.name);
    const geodudeAlturaData = await makeApiCall('cubone');
    geodudeAltura = geodudeAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const sandshrewData = await makeApiCall('sandshrew');
    sandshrewNome = sandshrewData.name;
    sandshrewTipos = sandshrewData.types.map((tipo) => tipo.type.name);
    const sandshrewAlturaData = await makeApiCall('cubone');
    sandshrewAltura = sandshrewAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const dragonairData = await makeApiCall('dragonair');
    dragonairNome = dragonairData.name;
    dragonairTipos = dragonairData.types.map((tipo) => tipo.type.name);
    const dragonairAlturaData = await makeApiCall('charizard');
    dragonairAltura = dragonairAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const gardevoirData = await makeApiCall('gardevoir');
    gardevoirNome = gardevoirData.name;
    gardevoirTipos = gardevoirData.types.map((tipo) => tipo.type.name);
    const gardevoirAlturaData = await makeApiCall('lucario');
    gardevoirAltura = gardevoirAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const arctovishData = await makeApiCall('arctovish');
    arctovishNome = arctovishData.name;
    arctovishTipos = arctovishData.types.map((tipo) => tipo.type.name);
    const arctovishAlturaData = await makeApiCall('charizard');
    arctovishAltura = arctovishAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const sableyeData = await makeApiCall('sableye');
    sableyeNome = sableyeData.name;
    sableyeTipos = sableyeData.types.map((tipo) => tipo.type.name);
    const sableyeAlturaData = await makeApiCall('machamp');
    sableyeAltura = sableyeAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const skarmoryData = await makeApiCall('skarmory');
    skarmoryNome = skarmoryData.name;
    skarmoryTipos = skarmoryData.types.map((tipo) => tipo.type.name);
    const skarmoryAlturaData = await makeApiCall('salamence');
    skarmoryAltura = skarmoryAlturaData.height / 10;
    ///////////////////////////////////////////////////////////////////////
    const pawmotData = await makeApiCall('pawmot');
    pawmotNome = pawmotData.name;
    pawmotTipos = pawmotData.types.map((tipo) => tipo.type.name);
    const pawmotAlturaData = await makeApiCall('garchomp');
    pawmotAltura = pawmotAlturaData.height / 10;


};


dadosPokemon();

randomValue = Math.random();
resultado = randomValue >= 0.5 ? 1 : 0;
if (resultado === 1) {
    resultado = 0
    resultado2 = 1
} else {
    resultado = 1
    resultado2 = 0
}


function verificarDeck() {


    if (nomeCarta === 'eevee') {
        battleCard1 = eevee
        cartaAtual.style.backgroundImage = 'url("img/eeveeCard.png")'
        nome.innerHTML = eeveeNome;
        atkType.innerHTML = eeveeTipos[0].substring(0, 4);
        defType.innerHTML = eeveeTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = eevee[0]
        defesa = eevee[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'yanmega') {
        battleCard1 = yanmega
        cartaAtual.style.backgroundImage = 'url("img/yanmegaCard.png")'
        nome.innerHTML = yanmegaNome;
        atkType.innerHTML = yanmegaTipos[0].substring(0, 4);
        defType.innerHTML = yanmegaTipos[1].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = yanmega[0]
        defesa = yanmega[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'oddish') {
        battleCard1 = oddish
        cartaAtual.style.backgroundImage = 'url("img/oddishCard.png")'
        nome.innerHTML = oddishNome;
        atkType.innerHTML = oddishTipos[0].substring(0, 4);
        defType.innerHTML = oddishTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = oddish[0]
        defesa = oddish[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'leafeon') {
        battleCard1 = leafeon
        cartaAtual.style.backgroundImage = 'url("img/leafeonCard.png")'
        nome.innerHTML = leafeonNome;
        atkType.innerHTML = leafeonTipos[0].substring(0, 4);
        defType.innerHTML = leafeonTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = leafeon[0]
        defesa = leafeon[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'exeggutor') {
        battleCard1 = exeggutor
        cartaAtual.style.backgroundImage = 'url("img/exeggutorCard.png")'
        nome.innerHTML = exeggutorNome;
        atkType.innerHTML = exeggutorTipos[resultado].substring(0, 4);
        defType.innerHTML = exeggutorTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = exeggutor[0]
        defesa = exeggutor[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'kingler') {
        battleCard1 = kingler
        cartaAtual.style.backgroundImage = 'url("img/kinglerCard.png")'
        nome.innerHTML = kinglerNome;
        atkType.innerHTML = kinglerTipos[0].substring(0, 4);
        defType.innerHTML = kinglerTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = kingler[0]
        defesa = kingler[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'psyduck') {
        battleCard1 = psyduck
        cartaAtual.style.backgroundImage = 'url("img/psyduckCard.png")'
        nome.innerHTML = psyduckNome;
        atkType.innerHTML = psyduckTipos[0].substring(0, 4);
        defType.innerHTML = psyduckTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = psyduck[0]
        defesa = psyduck[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'poliwrath') {
        battleCard1 = poliwrath
        cartaAtual.style.backgroundImage = 'url("img/poliwrathCard.png")'
        nome.innerHTML = poliwrathNome;
        atkType.innerHTML = poliwrathTipos[resultado].substring(0, 4);
        defType.innerHTML = poliwrathTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = poliwrath[0]
        defesa = poliwrath[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'magmar') {
        battleCard1 = magmar
        cartaAtual.style.backgroundImage = 'url("img/magmarCard.png")'
        nome.innerHTML = magmarNome;
        atkType.innerHTML = magmarTipos[0].substring(0, 4);
        defType.innerHTML = magmarTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = magmar[0]
        defesa = magmar[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'arcanine') {
        battleCard1 = arcanine
        cartaAtual.style.backgroundImage = 'url("img/arcanineCard.png")'
        nome.innerHTML = arcanineNome;
        atkType.innerHTML = arcanineTipos[0].substring(0, 4);
        defType.innerHTML = arcanineTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = arcanine[0]
        defesa = arcanine[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'coalossal') {
        battleCard1 = coalossal
        cartaAtual.style.backgroundImage = 'url("img/coalossalCard.png")'
        nome.innerHTML = coalossalNome;
        atkType.innerHTML = coalossalTipos[resultado].substring(0, 4);
        defType.innerHTML = coalossalTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = coalossal[0]
        defesa = coalossal[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'ekans') {
        battleCard1 = ekans
        cartaAtual.style.backgroundImage = 'url("img/ekansCard.png")'
        nome.innerHTML = ekansNome;
        atkType.innerHTML = ekansTipos[0].substring(0, 4);
        defType.innerHTML = ekansTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = ekans[0]
        defesa = ekans[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'geodude') {
        battleCard1 = geodude
        cartaAtual.style.backgroundImage = 'url("img/geodudeCard.png")'
        nome.innerHTML = geodudeNome;
        atkType.innerHTML = geodudeTipos[0].substring(0, 4);
        defType.innerHTML = geodudeTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = geodude[0]
        defesa = geodude[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'sandshrew') {
        battleCard1 = sandshrew
        cartaAtual.style.backgroundImage = 'url("img/sandshrewCard.png")'
        nome.innerHTML = sandshrewNome;
        atkType.innerHTML = sandshrewTipos[0].substring(0, 4);
        defType.innerHTML = sandshrewTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = sandshrew[0]
        defesa = sandshrew[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'dragonair') {
        battleCard1 = dragonair
        cartaAtual.style.backgroundImage = 'url("img/dragonairCard.png")'
        nome.innerHTML = dragonairNome;
        atkType.innerHTML = dragonairTipos[0].substring(0, 4);
        defType.innerHTML = dragonairTipos[0].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = dragonair[0]
        defesa = dragonair[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'gardevoir') {
        battleCard1 = gardevoir
        cartaAtual.style.backgroundImage = 'url("img/gardevoirCard.png")'
        nome.innerHTML = gardevoirNome;
        atkType.innerHTML = gardevoirTipos[resultado].substring(0, 4);
        defType.innerHTML = gardevoirTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = gardevoir[0]
        defesa = gardevoir[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'arctovish') {
        battleCard1 = arctovish
        cartaAtual.style.backgroundImage = 'url("img/arctovishCard.png")'
        nome.innerHTML = arctovishNome;
        atkType.innerHTML = arctovishTipos[resultado].substring(0, 4);
        defType.innerHTML = arctovishTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = arctovish[0]
        defesa = arctovish[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'sableye') {
        battleCard1 = sableye
        cartaAtual.style.backgroundImage = 'url("img/sableyeCard.png")'
        nome.innerHTML = sableyeNome;
        atkType.innerHTML = sableyeTipos[resultado].substring(0, 4);
        defType.innerHTML = sableyeTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = sableye[0]
        defesa = sableye[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'skarmory') {
        battleCard1 = skarmory
        cartaAtual.style.backgroundImage = 'url("img/skarmoryCard.png")'
        nome.innerHTML = skarmoryNome;
        atkType.innerHTML = skarmoryTipos[resultado].substring(0, 4);
        defType.innerHTML = skarmoryTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = skarmory[0]
        defesa = skarmory[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    } if (nomeCarta === 'pawmot') {
        battleCard1 = pawmot
        cartaAtual.style.backgroundImage = 'url("img/pawmotCard.png")'
        nome.innerHTML = pawmotNome;
        atkType.innerHTML = pawmotTipos[resultado].substring(0, 4);
        defType.innerHTML = pawmotTipos[resultado2].substring(0, 4);
        stats[0] = atkType.innerHTML
        stats[1] = defType.innerHTML
        dano = pawmot[0]
        defesa = pawmot[1]
        atkNum.innerHTML = dano;
        defNum.innerHTML = defesa;

    }



    if (cartaInfo === 'eevee') {
        atkTypeInfo.innerHTML = eeveeTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = eeveeTipos[0].substring(0, 4);
        dano = eevee[0]
        defesa = eevee[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'yanmega') {
        atkTypeInfo.innerHTML = yanmegaTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = yanmegaTipos[resultado2].substring(0, 4);
        dano = yanmega[0]
        defesa = yanmega[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'oddish') {
        atkTypeInfo.innerHTML = oddishTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = oddishTipos[0].substring(0, 4);
        dano = oddish[0]
        defesa = oddish[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'leafeon') {
        atkTypeInfo.innerHTML = leafeonTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = leafeonTipos[0].substring(0, 4);
        dano = leafeon[0]
        defesa = leafeon[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'exeggutor') {
        atkTypeInfo.innerHTML = exeggutorTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = exeggutorTipos[resultado2].substring(0, 4);
        dano = exeggutor[0]
        defesa = exeggutor[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'kingler') {
        atkTypeInfo.innerHTML = kinglerTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = kinglerTipos[0].substring(0, 4);
        dano = kingler[0]
        defesa = kingler[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'psyduck') {
        atkTypeInfo.innerHTML = psyduckTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = psyduckTipos[0].substring(0, 4);
        dano = psyduck[0]
        defesa = psyduck[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'poliwrath') {
        atkTypeInfo.innerHTML = poliwrathTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = poliwrathTipos[resultado2].substring(0, 4);
        dano = poliwrath[0]
        defesa = poliwrath[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'magmar') {
        atkTypeInfo.innerHTML = magmarTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = magmarTipos[0].substring(0, 4);
        dano = magmar[0]
        defesa = magmar[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'arcanine') {
        atkTypeInfo.innerHTML = arcanineTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = arcanineTipos[0].substring(0, 4);
        dano = arcanine[0]
        defesa = arcanine[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'coalossal') {
        atkTypeInfo.innerHTML = coalossalTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = coalossalTipos[resultado2].substring(0, 4);
        dano = coalossal[0]
        defesa = coalossal[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'ekans') {
        atkTypeInfo.innerHTML = ekansTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = ekansTipos[0].substring(0, 4);
        dano = ekans[0]
        defesa = ekans[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'geodude') {
        atkTypeInfo.innerHTML = geodudeTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = geodudeTipos[0].substring(0, 4);
        dano = geodude[0]
        defesa = geodude[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'sandshrew') {
        atkTypeInfo.innerHTML = sandshrewTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = sandshrewTipos[0].substring(0, 4);
        dano = sandshrew[0]
        defesa = sandshrew[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'dragonair') {
        atkTypeInfo.innerHTML = dragonairTipos[0].substring(0, 4);
        defTypeInfo.innerHTML = dragonairTipos[0].substring(0, 4);
        dano = dragonair[0]
        defesa = dragonair[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'gardevoir') {
        atkTypeInfo.innerHTML = gardevoirTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = gardevoirTipos[resultado2].substring(0, 4);
        dano = gardevoir[0]
        defesa = gardevoir[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'arctovish') {
        atkTypeInfo.innerHTML = arctovishTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = arctovishTipos[resultado2].substring(0, 4);
        dano = arctovish[0]
        defesa = arctovish[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'sableye') {
        atkTypeInfo.innerHTML = sableyeTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = sableyeTipos[resultado2].substring(0, 4);
        dano = sableye[0]
        defesa = sableye[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'skarmory') {
        atkTypeInfo.innerHTML = skarmoryTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = skarmoryTipos[resultado2].substring(0, 4);
        dano = skarmory[0]
        defesa = skarmory[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    } if (cartaInfo === 'pawmot') {
        atkTypeInfo.innerHTML = pawmotTipos[resultado].substring(0, 4);
        defTypeInfo.innerHTML = pawmotTipos[resultado2].substring(0, 4);
        dano = pawmot[0]
        defesa = pawmot[1]
        atkNumInfo.innerHTML = dano;
        defNumInfo.innerHTML = defesa;

    }




} setInterval(verificarDeck, 100);




function verificarDeckInimigo() {


    if (nomeCartaInimigo === 'eevee') {
        battleCard2 = INIeevee
        cartaAtualInimigo.style.backgroundImage = 'url("img/eeveeCard.png")'
        nomeInimigo.innerHTML = eeveeNome;
        atkTypeInimigo.innerHTML = eeveeTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = eeveeTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIeevee[0]
        defesaInimigo = INIeevee[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'yanmega') {
        battleCard2 = INIyanmega
        cartaAtualInimigo.style.backgroundImage = 'url("img/yanmegaCard.png")'
        nomeInimigo.innerHTML = yanmegaNome;
        atkTypeInimigo.innerHTML = yanmegaTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = yanmegaTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIyanmega[0]
        defesaInimigo = INIyanmega[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'oddish') {
        battleCard2 = INIoddish
        cartaAtualInimigo.style.backgroundImage = 'url("img/oddishCard.png")'
        nomeInimigo.innerHTML = oddishNome;
        atkTypeInimigo.innerHTML = oddishTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = oddishTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIoddish[0]
        defesaInimigo = INIoddish[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'leafeon') {
        battleCard2 = INIleafeon
        cartaAtualInimigo.style.backgroundImage = 'url("img/leafeonCard.png")'
        nomeInimigo.innerHTML = leafeonNome;
        atkTypeInimigo.innerHTML = leafeonTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = leafeonTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIleafeon[0]
        defesaInimigo = INIleafeon[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'exeggutor') {
        battleCard2 = INIexeggutor
        cartaAtualInimigo.style.backgroundImage = 'url("img/exeggutorCard.png")'
        nomeInimigo.innerHTML = exeggutorNome;
        atkTypeInimigo.innerHTML = exeggutorTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = exeggutorTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIexeggutor[0]
        defesaInimigo = INIexeggutor[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'kingler') {
        battleCard2 = INIkingler
        cartaAtualInimigo.style.backgroundImage = 'url("img/kinglerCard.png")'
        nomeInimigo.innerHTML = kinglerNome;
        atkTypeInimigo.innerHTML = kinglerTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = kinglerTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIkingler[0]
        defesaInimigo = INIkingler[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'psyduck') {
        battleCard2 = INIpsyduck
        cartaAtualInimigo.style.backgroundImage = 'url("img/psyduckCard.png")'
        nomeInimigo.innerHTML = psyduckNome;
        atkTypeInimigo.innerHTML = psyduckTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = psyduckTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIpsyduck[0]
        defesaInimigo = INIpsyduck[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'poliwrath') {
        battleCard2 = INIpoliwrath
        cartaAtualInimigo.style.backgroundImage = 'url("img/poliwrathCard.png")'
        nomeInimigo.innerHTML = poliwrathNome;
        atkTypeInimigo.innerHTML = poliwrathTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = poliwrathTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIpoliwrath[0]
        defesaInimigo = INIpoliwrath[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'magmar') {
        battleCard2 = INImagmar
        cartaAtualInimigo.style.backgroundImage = 'url("img/magmarCard.png")'
        nomeInimigo.innerHTML = magmarNome;
        atkTypeInimigo.innerHTML = magmarTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = magmarTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INImagmar[0]
        defesaInimigo = INImagmar[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'arcanine') {
        battleCard2 = INIarcanine
        cartaAtualInimigo.style.backgroundImage = 'url("img/arcanineCard.png")'
        nomeInimigo.innerHTML = arcanineNome;
        atkTypeInimigo.innerHTML = arcanineTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = arcanineTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIarcanine[0]
        defesaInimigo = INIarcanine[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'coalossal') {
        battleCard2 = INIcoalossal
        cartaAtualInimigo.style.backgroundImage = 'url("img/coalossalCard.png")'
        nomeInimigo.innerHTML = coalossalNome;
        atkTypeInimigo.innerHTML = coalossalTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = coalossalTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIcoalossal[0]
        defesaInimigo = INIcoalossal[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'ekans') {
        battleCard2 = INIekans
        cartaAtualInimigo.style.backgroundImage = 'url("img/ekansCard.png")'
        nomeInimigo.innerHTML = ekansNome;
        atkTypeInimigo.innerHTML = ekansTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = ekansTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIekans[0]
        defesaInimigo = INIekans[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'geodude') {
        battleCard2 = INIgeodude
        cartaAtualInimigo.style.backgroundImage = 'url("img/geodudeCard.png")'
        nomeInimigo.innerHTML = geodudeNome;
        atkTypeInimigo.innerHTML = geodudeTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = geodudeTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIgeodude[0]
        defesaInimigo = INIgeodude[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'sandshrew') {
        battleCard2 = INIsandshrew
        cartaAtualInimigo.style.backgroundImage = 'url("img/sandshrewCard.png")'
        nomeInimigo.innerHTML = sandshrewNome;
        atkTypeInimigo.innerHTML = sandshrewTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = sandshrewTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIsandshrew[0]
        defesaInimigo = INIsandshrew[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'dragonair') {
        battleCard2 = INIdragonair
        cartaAtualInimigo.style.backgroundImage = 'url("img/dragonairCard.png")'
        nomeInimigo.innerHTML = dragonairNome;
        atkTypeInimigo.innerHTML = dragonairTipos[0].substring(0, 4);
        defTypeInimigo.innerHTML = dragonairTipos[0].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIdragonair[0]
        defesaInimigo = INIdragonair[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'gardevoir') {
        battleCard2 = INIgardevoir
        cartaAtualInimigo.style.backgroundImage = 'url("img/gardevoirCard.png")'
        nomeInimigo.innerHTML = gardevoirNome;
        atkTypeInimigo.innerHTML = gardevoirTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = gardevoirTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIgardevoir[0]
        defesaInimigo = INIgardevoir[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'arctovish') {
        battleCard2 = INIarctovish
        cartaAtualInimigo.style.backgroundImage = 'url("img/arctovishCard.png")'
        nomeInimigo.innerHTML = arctovishNome;
        atkTypeInimigo.innerHTML = arctovishTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = arctovishTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIarctovish[0]
        defesaInimigo = INIarctovish[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'sableye') {
        battleCard2 = INIsableye
        cartaAtualInimigo.style.backgroundImage = 'url("img/sableyeCard.png")'
        nomeInimigo.innerHTML = sableyeNome;
        atkTypeInimigo.innerHTML = sableyeTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = sableyeTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIsableye[0]
        defesaInimigo = INIsableye[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'skarmory') {
        battleCard2 = INIskarmory
        cartaAtualInimigo.style.backgroundImage = 'url("img/skarmoryCard.png")'
        nomeInimigo.innerHTML = skarmoryNome;
        atkTypeInimigo.innerHTML = skarmoryTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = skarmoryTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIskarmory[0]
        defesaInimigo = INIskarmory[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    } if (nomeCartaInimigo === 'pawmot') {
        battleCard2 = INIpawmot
        cartaAtualInimigo.style.backgroundImage = 'url("img/pawmotCard.png")'
        nomeInimigo.innerHTML = pawmotNome;
        atkTypeInimigo.innerHTML = pawmotTipos[resultado].substring(0, 4);
        defTypeInimigo.innerHTML = pawmotTipos[resultado2].substring(0, 4);
        INIstats[0] = atkTypeInimigo.innerHTML
        INIstats[1] = defTypeInimigo.innerHTML
        danoInimigo = INIpawmot[0]
        defesaInimigo = INIpawmot[1]
        atkNumInimigo.innerHTML = danoInimigo;
        defNumInimigo.innerHTML = defesaInimigo;

    }


} setInterval(verificarDeckInimigo, 100);