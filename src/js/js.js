// Declaração de variáveis globais
var inputs = document.querySelectorAll('#X, #Y, #Z');
var x, y, z;
var i = 1;


// Função para salvar os valores dos campos X, Y e Z no clique de um botão
function salvar() {

    inputs.forEach(function (input) {

        if (input.value >= 20) {
            input.value = 20;
        } else if (input.value <= 0) {
            input.value = 0;
        }
    });

    x = parseInt(document.getElementById('X').value);
    y = parseInt(document.getElementById('Y').value);
    z = parseInt(document.getElementById('Z').value);
}

// Definição de uma função anônima (atualizador) atribuída à variável atualizador
var atualizador = function () {
    // Loop para incrementar i até que seja maior ou igual a x, y ou z
    while(i <= x || i <= y || i <= z) {
        i++;
    }
    // Calcula o valor da variável n como a metade de i
    n = i/2;

    // Atualiza propriedades do estilo do corpo do documento com valores calculados
    document.body.style.setProperty('--set-triangle', 'polygon(0rem 0rem,' + x + 'rem 0rem, ' + y + 'rem 0, 0 ' + z + 'rem)');
    document.body.style.setProperty('--nivelador', '' + i + 'rem');
    document.body.style.setProperty('--centralizador', '' + n + 'rem');

    // Loop para decrementar i até que seja menor ou igual a x, y ou z
    while(i >= x || i >= y || i >= z) {
        i--;
    }
}

// Define um intervalo de tempo para chamar a função atualizador a cada 100 milissegundos
var time = setInterval(atualizador, 100);

// Função para verificar e exibir alertas com base nas propriedades dos triângulos
function check() {
    let a, b, c;
    // Cálculos para verificar propriedades dos triângulos
    a = x + y + 1;
    b = x + z + 1;
    c = z + y + 1;

    // Condições para verificar o tipo de triângulo e exibir alertas
    if (x >= c || y >= b || z >= a) {
        alert('triângulo inválido');
    } else if (x === z && z === y) {
        alert('Seu triângulo é equilátero');
    } else if (x != z && z != y) {
        alert('Seu triângulo é escaleno');
    } else if (x === y && z != x || x === z && y != z || y === z && x != y) {
        alert('Seu triângulo é isósceles');
    }
}


// Menu burguer
let menuBurguer = document.querySelector('.r-menu-btn');

menuBurguer.addEventListener('click', (event) => {
    let target = document.querySelector('.inner-header-content');

    if (target.classList.contains('hide')) {
        target.classList.remove('hide');
        document.querySelector('.r-menu-btn ion-icon').name = "return-down-forward-outline";
    } else {
        target.classList.add('hide');
        document.querySelector('.r-menu-btn ion-icon').name = "menu-outline";
    }
});

// Menu burguer
