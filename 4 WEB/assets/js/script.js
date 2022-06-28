const colorA = "yellow", colorS = "red", colorD = "green", sinColor ="Ninguno";
const cuadroUno = document.querySelector('#cuadroUno');
const cuadroDos = document.querySelector('#cuadroDos');
const cuadroTres = document.querySelector('#cuadroTres');
const cuadroCuatro = document.querySelector('#cuadroCuatro');
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

cambiaColor = function (cuadro) {
    cuadro.style.backgroundColor = colorElegido;
}

cuadroUno.addEventListener('click', function(){
    cambiaColor(cuadroUno);
})
cuadroDos.addEventListener('click', function(){
    cambiaColor(cuadroDos);
})    
cuadroTres.addEventListener('click', function(){
    cambiaColor(cuadroTres);
})
cuadroCuatro.addEventListener('click', function(){
    cambiaColor(cuadroCuatro);
})
