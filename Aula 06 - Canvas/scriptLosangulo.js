function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(75, 75);
    ctx.lineTo(150, 50);
    ctx.lineTo(75, 25);
    ctx.closePath();
    ctx.fill();
    }
}
   
