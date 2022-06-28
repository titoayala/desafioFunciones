const colorA = "yellow", colorS = "red", colorD = "green", sinColor ="Ninguno";
let colorElegido;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        colorElegido = colorA;
    } else if (event.key === 's' || event.key === 'S') {
        colorElegido = colorS;
    } else if (event.key === 'd' || event.key === 'D') {
        colorElegido = colorD;
    } else 
        colorElegido = sinColor;
    console.log("El color elegido es " + colorElegido);
})