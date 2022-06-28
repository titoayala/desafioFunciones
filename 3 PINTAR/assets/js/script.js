let elemento = document.querySelector('#ele1');

pintar = function (color = "green") {
    elemento.style.backgroundColor = color;
}
pintar();
elemento.addEventListener('click', function () {
    elemento.style.backgroundColor = "yellow";
})