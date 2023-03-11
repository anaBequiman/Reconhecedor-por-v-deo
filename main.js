carregou = "";
resul = [];
function preload(){
    vd = createVideo("video.mp4");
}
function draw(){
    image(vd, 0, 0, 480, 380);
    if(carregou){
        detector.detect(vd, pegarResultado);
        for(var i = 0; i < resul.length; i++){
            fill("#800000");
            stroke("#800000");
            text(resul[i].label, resul[i].x + 5, resul[i].y+10);
            noFill();
            rect(resul[i].x, resul[i].y, resul[i].width, resul[i].height);
            document.getElementById("quantidade").innerHTML = i;
            document.getElementById("status").innerHTML = "Detectado";
        }
    }
}
function setup(){
    cnv = createCanvas(480, 380);
    cnv.center();
    vd.hide();
}
function iniciar(){
    detector = ml5.objectDetector('cocossd', modeloCarregado);
    document.getElementById("status").innerHTML = "Detectando...";
}
function modeloCarregado(){
    console.log("Função Carregada");
    carregou = true;
    vd.loop();
    vd.speed(2);
    vd.volume(0.5);
}
function pegarResultado(error, resultado){
    if(error){
        console.log(error);
    }
    else{
        console.log(resultado);
        resul = resultado;
    }
}