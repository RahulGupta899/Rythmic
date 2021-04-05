var playbtn = document.querySelectorAll("div button");
for(var i=0;i<playbtn.length;i++){
  playbtn[i].addEventListener("click",function(){
    var music = this.getAttribute("song");
    playSong(music);
  });


}

function playSong(song){

  if(song=="1roar"){
    var roar = new Audio("sounds/1roar.mp3");
    roar.play();
  }
  else if(song=="2paradise"){
    var paradise = new Audio("sounds/2paradise.mp3");
    paradise.play();
  }
  else if(song=="3allofme"){
    var allofme = new Audio("sounds/3allofme.mp3");
    allofme.play();
  }
  else if(song=="4memories"){
    var memories = new Audio("sounds/4memories.mp3");
    memories.play();
  }
  else if(song=="5heatens"){
    var heatens = new Audio("sounds/5heatens.mp3");
    heatens.play();
  }
  else if(song=="6perfec"){
    var perfect = new Audio("sounds/6perfect.mp3");
    perfect.play();
  }
  else if(song=="7treatyoubetter"){
    var treatyoubetter = new Audio("sounds/7treatyoubetter.mp3");
    treatyoubetter.play();
  }
  else if(song=="8youbelongwithme"){
    var youalongwithme = new Audio("sounds/8youalongwithme.mp3");
    youalongwithme.play();
  }
  else if(song=="9kaisehotum"){
    var kaisehotum = new Audio("sounds/9kaisehotum.mp3");
    kaisehotum.play();
  }
  else if(song=="10aahatein"){
    var aahatein = new Audio("sounds/10aahatein.mp3");
    aahatein.play();
  }
  else if(song=="11aankhein"){
    var aankhein = new Audio("sounds/11aankhein.mp3");
    aankhein.play();
  }
  else if(song=="12tujhekitna"){
    var tujhekitna = new Audio("sounds/12tujhekitna.mp3");
    tujhekitna.play();
  }

}
