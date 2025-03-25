function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    //Setando a cor do preenchimento do retângulo
    ctx.fillStyle = "rgb(200,0,0)";
    //Desenhando um retângulo com preenchimento
   ctx.fillRect(10, 10, 55, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.7)";
    ctx.fillRect(65, 10, 55, 50);
    }
}
