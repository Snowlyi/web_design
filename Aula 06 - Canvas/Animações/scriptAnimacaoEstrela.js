const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let angle = 0, radius = 100, centerX = 200, centerY = 200;
let interval;
function myMove() {
 clearInterval(interval);
 interval = setInterval(() => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);

 let x = centerX + radius * Math.tan(angle);
 let y = centerY + radius * Math.sin(angle);

 ctx.beginPath();
 ctx.moveTo(75 + x, 10 + y);
 ctx.lineTo(95 + x, 60 + y);
 ctx.lineTo(150 + x, 60 + y);
 ctx.lineTo(100 + x, 90 + y);
 ctx.lineTo(125 + x, 150 + y);
 ctx.lineTo(75 + x, 105 + y);
 ctx.lineTo(25 + x, 150 + y);
 ctx.lineTo(45 + x, 90 + y);
 ctx.lineTo(0 + x, 60 + y);
 ctx.lineTo(50 + x, 60 + y);
 ctx.closePath();
 ctx.fill();
 angle += 0.05;
 }, 100);
}
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(75, 10);
ctx.lineTo(95, 60);
ctx.lineTo(150, 60);
ctx.lineTo(100, 90);
ctx.lineTo(125,150);
ctx.lineTo(75, 105);
ctx.lineTo(25, 150);
ctx.lineTo(45, 90);
ctx.lineTo(0, 60);
ctx.lineTo(50, 60);
ctx.closePath();
ctx.fill();
