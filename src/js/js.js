var x, y, z;

function salvar() {
    x = parseInt(document.getElementById('X').value)
    y = parseInt(document.getElementById('Y').value)
    z = parseInt(document.getElementById('Z').value)
}
var i = 1;

var atualizador = function () {
    while(i <= x || i <= y || i <= z) {
        i++;
        };
        
    document.body.style.setProperty('--set-triangle', 'polygon(0rem 0rem,' + x + 'rem 0rem, ' + y + 'rem 0, 0 ' + z + 'rem)')
    document.body.style.setProperty('--nivelador', '' + i + 'rem')

}

var time = setInterval(atualizador, 100)

function check() {
    let a, b, c;
    a = x + y + 1;
    b = x + z + 1;
    c = z + y + 1;
    if (x >= c || y >= b || z >= a) {
        alert('triangulo inválido')
    } else if (x === z && z === y) {
        alert('Seu triangulo é equilátero');
    } else if (x != z && z != y) {
        alert('Seu triangulo é uma escaleno');
    } else if (x === y && z != x || x === z && y != z || y === z && x != y) {
        alert('Seu triangulo é isóceles');
    }
}