const blackScreen = document.getElementById('black-screen');
  const text = document.getElementById('text');
  const bgGrass = document.getElementById('bgGrass');
  const bgFire = document.getElementById('bgFire');
  const bgWater = document.getElementById('bgWater');
  const imgGrass = document.getElementById('imgGrass');
  const imgFire = document.getElementById('imgFire');
  const imgWater = document.getElementById('imgWater');
  const canva = document.getElementById('c');
  const choice = document.querySelector('.choice');
  const cardBorderGrass = document.getElementById('bord1')
  const cardBorderFire = document.getElementById('bord2')
  const cardBorderWater = document.getElementById('bord3')
  const cardGrass = document.querySelector('.grass');
  const cardFire = document.querySelector('.fire');
  const cardWater = document.querySelector('.water');
  

  


function verifiqueEscolha(){

  if (telaEscolha) {

  choice.style.opacity = '1'
  canva.style.opacity = '0.4'

    let grass = false
    let fire = false
    let water = false
  
  cardGrass.addEventListener("mouseenter", function() {
    
      
      if (telaEscolha === true) {
      bgGrass.style.backgroundImage = 'linear-gradient(30deg, rgb(15, 71, 0) 10%, rgb(80, 165, 0) 10%, rgba(255, 0, 0, 0) 80%)'
      bgGrass.style.opacity = "100%";
      canva.style.opacity = '20%';
      cardBorderGrass.style.backgroundColor = 'rgb(121, 252, 5)';
      cardBorderGrass.style.opacity = '100';
      if (!fire && !water) {
      setTimeout(() => {
      
      grass = true
      textGrass.style.transition = '0.5s';
      textGrass.style.marginTop = '1.8vh';
      textGrass.style.color = 'rgb(121, 252, 5)';
      textGrass.style.scale = '1.15';
      
    }, 120)}
    }});
    
  cardGrass.addEventListener("mouseleave", function() { 
    
      if (telaEscolha === true) {
      bgGrass.style.opacity = "";
      canva.style.opacity = '';
      cardBorderGrass.style.backgroundColor = '';
      cardBorderGrass.style.opacity = '';
      setTimeout(() => {
        grass = false
      textGrass.style.marginTop = '';
      textGrass.style.color = '';
      textGrass.style.scale = '';
    }, 120)
    }});
  


  cardFire.addEventListener("mouseenter", function() {
    
      if (telaEscolha === true) {
          bgFire.style.backgroundImage = 'linear-gradient(0deg, rgb(255, 51, 0) , rgba(255, 123, 0, 0.633) 30%, rgba(255, 0, 0, 0) 70%)'
      bgFire.style.opacity = "100%";;
      canva.style.opacity = '20%';
      cardBorderFire.style.backgroundColor = 'rgb(255, 115, 0)';
      cardBorderFire.style.opacity = '100';
      if (!grass && !water) {
      setTimeout(() => {
       
        fire = true
        textFire.style.transition = '0.5s';
        textFire.style.marginTop = '1.8vh';
        textFire.style.color = 'rgb(255, 89, 0)';
        textFire.style.scale = '1.15';
        
      }, 120)}
    }});
    
  cardFire.addEventListener("mouseleave", function() { 
    
      if (telaEscolha === true) {
      bgFire.style.opacity = "";
      canva.style.opacity = '';
      cardBorderFire.style.backgroundColor = '';
      cardBorderFire.style.opacity = '';
      setTimeout(() => {
        fire = false
        textFire.style.marginTop = '';
        textFire.style.color = '';
        textFire.style.scale = '';
      }, 120)
    }});
  


  cardWater.addEventListener("mouseenter", function() {
    
      if (telaEscolha === true) {
      bgWater.style.backgroundImage = 'linear-gradient(330deg, rgb(0, 81, 202) 10%, rgb(0, 153, 255) 10%, rgba(255, 0, 0, 0) 80%'
      bgWater.style.opacity = "100%";
      canva.style.opacity = '20%';
      cardBorderWater.style.backgroundColor = 'rgb(0, 213, 255)';
      cardBorderWater.style.opacity = '100';
      if (!fire && !grass) {
      setTimeout(() => {
        
        water = true
        textWater.style.animationDelay = '0.5s';
        textWater.style.transition = '0.5s';
        textWater.style.marginTop = '1.8vh';
        textWater.style.color = 'rgb(0, 242, 255)';
        textWater.style.scale = '1.15';
        
      }, 120)}
    }});
    
  cardWater.addEventListener("mouseleave", function() { 
    
      if (telaEscolha === true) {
      bgWater.style.opacity = "";
      canva.style.opacity = '';
      cardBorderWater.style.backgroundColor = '';
      cardBorderWater.style.opacity = '';
      setTimeout(() => {
        water = false
        textWater.style.marginTop = '';
        textWater.style.color = '';
        textWater.style.scale = '';
      }, 120)
    }});

    cardWater.addEventListener("click", function() {
      if (telaEscolha === true) {
        moving = true
        fecharEscolha = true
        telaEscolha = false
        escolhendo = false
        card1 = 'kingler'
        verifiqueEscolha()
      }});

    cardFire.addEventListener("click", function() {
      if (telaEscolha === true) {
        moving = true
        fecharEscolha = true
        telaEscolha = false
        escolhendo = false
        card1 = 'magmar'
        console.log(card1)
          verifiqueEscolha()
      }});

    cardGrass.addEventListener("click", function() {
      if (telaEscolha === true) {
        moving = true
        fecharEscolha = true
        telaEscolha = false
        escolhendo = false
        card1 = 'oddish'
        verifiqueEscolha()
      }});
  }else{
    choice.style.opacity = '';
    canva.style.opacity = '';
  }

}

  setTimeout(() => {
    text.style.opacity = '0';
    blackScreen.style.opacity = '0';
  }, 1500);
  
  setTimeout(() => {
      text.style.marginTop = '0';
    }, 2500);
    
