
var target;
let redclose=document.querySelector(".zIndex");
let redpaper=document.querySelector(".red");

redpaper.addEventListener("click",(e)=>{
           if(e.target != target){
            redpaper.style.width="100%";
            redpaper.style.height="100%";
            redpaper.style.zIndex="1" ;
            redpaper.style.opacity="1";
            redclose.style.display="block";
           }        
})
 redclose.addEventListener("click",function(e){  
                  target=e.target;
                  redpaper.style.height="50vh";
                  redpaper.style.width="50vw"; 
                  redpaper.style.opacity="0";
                  redpaper.style.zIndex="0" ;
      })




var target;
let blueclose=document.querySelector(".zIndex2");
let bluepaper=document.querySelector(".blue");

bluepaper.addEventListener("click",function(a){
      if(a.target !=target){
            bluepaper.style.width="100%";
            bluepaper.style.height="100%";
            bluepaper.style.left="0px";
            bluepaper.style.top="0px";
            bluepaper.style.zIndex="1";
            bluepaper.style.opacity="1";
            blueclose.style.display="block";

      }
})
blueclose.addEventListener("click",function(a){
      target=a.target;
      bluepaper.style.width="50%";
      bluepaper.style.height="50%";
      bluepaper.style.left="720px";
      bluepaper.style.top="0px";
      bluepaper.style.opacity="0";
      bluepaper.style.zIndex="0";
})

var target;
let blackclose=document.querySelector(".zIndex3");
let blackpaper=document.querySelector(".black");
blackpaper.addEventListener("click",function(b){
      if(b.target !=target){
            blackpaper.style.width="100%";
            blackpaper.style.height="100%";
            blackpaper.style.left="0px";
            blackpaper.style.top="0px";
            blackpaper.style.zIndex="1" ;
            blackpaper.style.opacity="1";
            blackpaper.style.display="block";
      }

})
blackclose.addEventListener("click",function(b){
      target=b.target;
      redpaper.style.height="50%";
      redpaper.style.width="50%";
      blackpaper.style.left="-800px";
      blackpaper.style.top="410px"; 
      blackpaper.style.opacity="0";
      blackpaper.style.zIndex="0" ;
})

var target;
let greenclose=document.querySelector(".zIndex4");
let greenpaper=document.querySelector(".green");

greenpaper.addEventListener("click", function(c){
      if(c.target != target){
            greenpaper.style.width="100%";
            greenpaper.style.height="100%";
            greenpaper.style.left="0px";
            greenpaper.style.top="0px";
            greenpaper.style.zIndex="1";
            greenpaper.style.opacity="1";
            greenclose.style.display="block";

      }
})
greenclose.addEventListener("click",function(c){
      target=c.target;
      greenpaper.style.width="50%";
      greenpaper.style.height="50%";
      greenpaper.style.left="730px";
      greenpaper.style.top="410px";
      greenpaper.style.opacity="0";
      greenpaper.style.zIndex="0";

})