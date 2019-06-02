$(document).ready(()=>{

//canvas em arquivo separado

//teclas
var LEFT = 37 , UP = 38 , RIGHT = 39 , DOWN = 40;

//movimento
var mvLeft = mvUp = mvRight = mvDown = false;   

//Arrays
var sprites = [];
var blocks = [];

//player
var caracter = new player(10,10,50,50,"#00f");
caracter.speed = 4;
sprites.push(caracter);
    //entrada
	window.addEventListener("keydown",function(e){
        var key = e.keyCode;
        console.log(key);
		switch(key){
			case LEFT:
				mvLeft = true;
				break;
			case UP:
				mvUp = true;
				break;
			case RIGHT:
				mvRight = true;
				break;
			case DOWN:
				mvDown = true;
				break;
		}
	},false);
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(e){
		var key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = false;
				break;
			case UP:
				mvUp = false;
				break;
			case RIGHT:
				mvRight = false;
				break;
			case DOWN:
				mvDown = false;
				break;
		}
	},false);



//funcoes



function loop(){
    window.requestAnimationFrame(loop,canvas);
    update();
    render();

}
function update(){
   if (mvLeft && !mvRight){
       
            caracter.x -= caracter.speed;
    }
    if (mvRight && !mvLeft){
       
        caracter.x += caracter.speed;
    }
    if (mvUp && !mvDown){
        
        caracter.y -= caracter.speed;
    }    
    if (mvDown && !mvUp){
        
        caracter.y += caracter.speed;
        console.log(mvDown+" "+mvUp);
    }
caracter.x = Math.max(0,Math.min(600 -caracter.wid,caracter.x));
caracter.y = Math.max(0,Math.min(600 - caracter.hei, caracter.y));
}
function render(){
    ctx.clearRect(0,0,600,600);
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0,0,600,600);
    for(var i in sprites){
        var spr = sprites[i];
        if(spr.visible){
            ctx.fillStyle = spr.cor;
            ctx.fillRect(spr.x,spr.y,spr.wid,spr.hei);
        }
    }
}
    loop();
});


// if(x < obx + wid && x + wid > obx && y < oby + hei && y+hei > oby){



// }