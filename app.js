let numMax = 10; // rango entre el numero secreto
let intMax = 4; // intentos maximos
let i = 1; // numero de intentos
let listaNumsecret = []; // listado de los numeros que ya salieron
let numSecret; // el numero secreto 

// Funcion para agregar texto en un elemento
function asignarTxt(element, txt) {
    const elementHTML = document.querySelector(element); // const porque la variable no va a cambiar
    elementHTML.innerHTML = txt;
}

// Funcion de lógica del juego
function verificarInt() {
    let numUser = parseInt(document.getElementById('valueUser').value);

    if (i < intMax) {
        if (numUser === numSecret) {
            asignarTxt('p', `¡Ganaste!, acertaste en el intento número ${i} ${(i===1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intento').setAttribute('disabled', true);
        } else {
            asignarTxt('p', numUser > numSecret ? 'El número es menor' : 'El número es mayor');
            i++;
            cleanCaja();
        }
    } else {
        asignarTxt('p', 'Lo siento, has alcanzado el número máximo de intentos');
        document.getElementById('intento').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

// Funcion para limpiar la caja de entrada del número
function cleanCaja() {
    document.getElementById('valueUser').value = '';
}

// Funcion para generar un número aleatorio
function getNumSecret() {
    let numGenerado;
    do {
        numGenerado = Math.floor(Math.random() * numMax) + 1;
    } while (listaNumsecret.includes(numGenerado));

    listaNumsecret.push(numGenerado);
    return numGenerado;
}

// Funcion para inicializar el juego
function messageEntrada() {
    asignarTxt('h1', 'Juego del número secreto');
    asignarTxt('p', `Selecciona un número del 1 al ${numMax}.`);
    numSecret = getNumSecret();
    i = 1;
}

// Funcion para restablecer el juego
function restarGame() {
    cleanCaja();
    messageEntrada();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('intento').removeAttribute('disabled');
}

messageEntrada();






