const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 10, y = 10, dx = 5, dy = 5;
let interval;
function myMove() {
 clearInterval(interval);
 interval = setInterval(() => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.fillRect(x, y, 40, 20);
 x += dx;
 y += dy;
 if (x + 40 >= canvas.width || x <= 0) dx *= -1;
 if (y + 20 >= canvas.height || y <= 0) dy *= -1;
 }, 50);
}
ctx.fillStyle = "blue";
ctx.fillRect(x, y, 40, 20);
