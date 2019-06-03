$(document).ready(()=>{


    var pontuacao = 0 ;
    $('#pontuacao').text("SCORE "+  pontuacao);
       
//var
var ganhou = 0;
var win = localStorage.getItem('win');



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
if(caracter.speed > 10){
    caracter.speed --;
}
sprites.push(caracter);
if(win != null){
    caracter.speed ++;
 for (let i = 0; i < Math.floor(Math.random() *(10 +win -1) +1 ) ; i++) {
        var obj = new player(Math.random()*(500 - 50) + 50 ,Math.random()* (500 - 0) +0 ,Math.floor(Math.random()*(150 - 10) + 10),Math.floor(Math.random()*(150 - 10)+10),getRandomColor());
        sprites.push(obj);
        blocks.push(obj);
     
 }
}
else{
    for (let i = 0; i < Math.floor(Math.random() *(10 -1) +1 ) ; i++) {
        var obj = new player(Math.random()*(500 - 50) + 50 ,Math.random()* (500 - 0) +0 ,Math.floor(Math.random()*(150 - 10) + 10),Math.floor(Math.random()*(150 - 10)+10),getRandomColor());
        sprites.push(obj);
        blocks.push(obj);
     
 }
}
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
if(win!= null){
var tempo = 30 - win;setInterval(() => {
    tempo --;   

    
}, 1000);
}
else{
    var tempo = 30 ;
    setInterval(() => {
        tempo --;   
    
        
    }, 1000);
}

function loop(){
    window.requestAnimationFrame(loop,canvas);
    update();
    render();

}
function update(){
    $("#time").text("   Time: " + tempo);

    $("#bloc").text("BLocos: "+blocks.length);
    for(var i in blocks){
        var bloco = blocks[i];

    if(bloco.x <=-50||bloco.x > 610 || bloco.y <= -50 || bloco.y > 610){
        pontuacao += 10;
        bloco.visible = false;
        blocks.splice(i,1);
        $('#pontuacao').text("SCORE "+  pontuacao);




        }

    }

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
    if(caracter.x >= 610){
        caracter.x = -40;
    }
    if(caracter.x <= -50){
        caracter.x = 600;
    }
    if(caracter.y >= 610){
        caracter.y = -40;
    }
    if(caracter.y <= -50){
        caracter.y = 600;
    }

// caracter.x = Math.max(0,Math.min(650 -caracter.wid,caracter.x));
// caracter.y = Math.max(0,Math.min(650 - caracter.hei, caracter.y));

//colisoes
 for(var i in blocks){
     var blk = blocks[i];
     if(blk.visible){
         blockRect(blk,caracter);

     }


 }


 if(tempo==0 && blocks == null || blocks.length == 0){
     alert('You Win!');
     ganhou ++;
    localStorage.setItem("win",ganhou);

     location.reload();
 
 
 }
 else if(tempo == 0 && blocks != null){


    alert("Game OVER");
        localStorage.removeItem("win");
    location.reload();
 }
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