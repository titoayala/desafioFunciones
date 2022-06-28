let elemento = document.querySelector('#ele1');

pintar = function (color = "green") {
    elemento.style.backgroundColor = color;
}

pintar(); //Llamado a la función

elemento.addEventListener('click', function () {
    elemento.style.backgroundColor = "yellow";
}
)