function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
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
    }
}
   
