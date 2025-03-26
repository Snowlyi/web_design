const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 10, y = 100, speed = 5, direction = 1;
let interval;
function myMove() {
 clearInterval(interval);
 interval = setInterval(() => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.fillRect(x, y, 40, 20);
 x += speed * direction;
 if (x + 40 >= canvas.width || x <= 0) direction *= -1; // Inverte o movimento
 }, 50);
}
ctx.fillStyle = "red";
ctx.fillRect(x, y, 40, 20);