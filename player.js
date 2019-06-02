var player = function(x, y, wid, hei, cor){
	this.x = x;
	this.y = y;
	this.wid = wid;
	this.hei= hei;
	this.cor = cor;
	this.visible = true;
}
//Retorna a metade da largura
player.prototype.halfWidth = function(){
	return this.wid/2;
}
//Retorna a metade da altura
player.prototype.halfHeight = function(){
	return this.hei/2;
}
//Retorna a posição do centro do objeto no eixo X
player.prototype.centerX = function(){
	return this.x + this.halfWidth();
}
//Retorna a posição do centro do objeto no eixo Y
player.prototype.centerY = function(){
	return this.y + this.halfHeight();
}
