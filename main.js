
function sparkling(){
    let text = document.getElementById("pasko");


    let colors = ["rgba(255, 0, 0)", "rgb(0,255,0)", "rgb(255,255,0)", ];
    let generatorColor = Math.floor(Math.random() * 4);

    text.style.color = colors[generatorColor];
}
function start(){
    start_color = setInterval(sparkling, 3000);

}
function stop(){
    clearInterval(start_color);
}
