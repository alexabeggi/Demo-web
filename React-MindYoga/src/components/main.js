let timesClicked = 0;
let timesClicked1 = 0;
let timesClicked2 = 0;
let timesClicked3 = 0;

function collage(element) { 
  
  function sum(){
    timesClicked = timesClicked1 + timesClicked2 + timesClicked3;
    //console.log(timesClicked, timesClicked1, timesClicked2, timesClicked3);
  }
    
  if (element === document.querySelector(".one")){
    if (timesClicked < 1){
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Zen-Resort-Bali-in-Seririt-Bali.jpg)";
      document.querySelector(".txt1").style.visibility = "hidden";
      timesClicked1++;
      sum();
    } else if (timesClicked1 === 1) {
      document.querySelector(".one").style['background-image'] = "none";
      document.querySelector(".txt1").style.visibility = "visible";
      timesClicked1 = 0;
      sum();
    } else if ((timesClicked2 === 1) || (timesClicked3 === 1)) {  
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Zen-Resort-Bali-in-Seririt-Bali.jpg)";
      document.querySelector(".txt1").style.visibility = "hidden";
      timesClicked1++;
      document.querySelector(".two").style['background-image'] = "none";
      document.querySelector(".txt2").style.visibility = "visible";
      timesClicked2 = 0;
      document.querySelector(".three").style['background-image'] = "none";
      document.querySelector(".txt3").style.visibility = "visible";
      timesClicked3 = 0;
      sum();
    }
  } else if (element === document.querySelector(".two")) {
    if (timesClicked < 1){
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Surf-Goddess-Retreats-in-Seminyak-Bali.jpg)";
      document.querySelector(".txt2").style.visibility = "hidden";
      timesClicked2++;
      sum();
    } else if (timesClicked2 === 1) {
      document.querySelector(".two").style['background-image'] = "none";
      document.querySelector(".txt2").style.visibility = "visible";
      timesClicked2 = 0;
      sum();
    } else if ((timesClicked1 === 1) || (timesClicked3 === 1)){  
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Surf-Goddess-Retreats-in-Seminyak-Bali.jpg)";
      document.querySelector(".txt2").style.visibility = "hidden";
      timesClicked2++;
      document.querySelector(".one").style['background-image'] = "none";
      document.querySelector(".txt1").style.visibility = "visible";
      timesClicked1 = 0;
      document.querySelector(".three").style['background-image'] = "none";
      document.querySelector(".txt3").style.visibility = "visible";
      timesClicked3 = 0;
      sum();
    }
  } else if (element === document.querySelector(".three")) {
    if (timesClicked < 1){
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Barberyn-Reef-Ayurveda-Resort-in-Beruwala-Sri-Lanka.jpg)";
      document.querySelector(".txt3").style.visibility = "hidden";
      timesClicked3++;
      sum();
    } else if (timesClicked3 === 1) {
      document.querySelector(".three").style['background-image'] = "none";
      document.querySelector(".txt3").style.visibility = "visible";
      timesClicked3 = 0;
      sum();
    } else if ((timesClicked1 === 1) || (timesClicked2 === 1)) {
      element.style['background-image'] = "url(https://cdn.doyou.com/wp/2014/06/Barberyn-Reef-Ayurveda-Resort-in-Beruwala-Sri-Lanka.jpg)";
      document.querySelector(".txt3").style.visibility = "hidden";
      timesClicked3++;
      document.querySelector(".one").style['background-image'] = "none";
      document.querySelector(".txt1").style.visibility = "visible";
      timesClicked1 = 0;
      document.querySelector(".two").style['background-image'] = "none";
      document.querySelector(".txt2").style.visibility = "visible";
      timesClicked2 = 0;
      sum();
    }
  }
  element.style['background-size'] = "260px 180px";
}

export default collage;