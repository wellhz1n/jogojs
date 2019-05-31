$(document).ready(()=>{


            var x =10;
            var y = 10;
            var hei = 30;
            var wid = 30;
            var pontuacao = 0;
            var obx = Math.random() * (550 - 10) + 10;
            var oby = Math.random() * (550 - 10) + 10;
            // function objeto(x,y, wid, hei) {
            //     ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
            //     ctx.fillRect(x,y, wid, hei);
            // }
            
    // function desenhar(x,y,wid,hei) {
    //     ctx.fillStyle = '#666'; // Fill color of rectangle drawn
    //     ctx.fillRect(x, y, wid, hei); //This will draw a rectangle of 20x20
    //     ctx.strokeStyle = "#000000";
    //     ctx.strokeRect(0,0,600,600);
    // }

    var p = new player(10,10,30,30,"#0000ff");
    p.desenhaplayer();
    // desenhar(x,y,wid,hei);

        window.onkeydown = (e)=>{
            $("#pontuacao").text("Score: " + pontuacao);
            var key = e.keyCode;
            console.log(key);
            console.log(x);
            if(key === 39 && x < 550){
                x = x+20;


            } 
            else if(key == 37 && x>10){

                    x= x-20;

            }
            else if(key === 40 && y < 550){
                y = y+20;


            } 
            else if(key == 38 && y>10){

                    y= y-20;

            }
            // ctx.clearRect(0,0, 600, 600);
            // desenhar(x,y,wid,hei);
            if(pontuacao >= 0){

                objeto(obx,oby,wid,hei);
            }
            else{
               
                

            }
            if(x < obx + wid && x + wid > obx && y < oby + hei && y+hei > oby){
                pontuacao++;
                // ctx.clearRect(0,0, 600, 600);
                // desenhar(x,y,wid,hei);


            }
        }

        


});

