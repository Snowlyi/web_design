var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 40, 20);
var x = 10; var y = 10
function myMove(){
 var x1=setInterval(handler,50)
}
function handler(){
if(x==100){
 clearInterval(x1)
 } else {
 ctx.clearRect(0,0,500,500)
 x = x+5;
 y = y+6;
 ctx.fillRect(x, y, 40, 20)
 }
}
