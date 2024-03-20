let tiempoTerminado;
let intevaloTime;

function comenzarCuentaRegresiva(){
    tiempoTerminado = setTimeout(tiempoCumplido, 30000);
    intevaloTime = setInterval(tictac, 1000);

    document.querySelector('#cuentaRegresiva').innerHTML = 30;
}

function tictac(){
    let tiempo = document.querySelector('#cuentaRegresiva').innerHTML;
    document.querySelector('#cuentaRegresiva').innerHTML = tiempo - 1;
}

function tiempoCumplido(){
    clearInterval(intevaloTime);
    document.querySelector('#cuentaRegresiva').innerHTML = 0;
    document.querySelector('#audiofinal').play();
    alert('Game Over, Se acabo el tiempo, intentalo nuevamente')
}

function finalizado(){
    clearTimeout(tiempoTerminado);
    clearInterval(intevaloTime);


    let fecha = new Date();
    let respuesta1 = document.querySelector('#respuesta1').value;
    let respuesta2 = document.querySelector('#respuesta2').value;
    let respuesta3 = document.querySelector('#respuesta3').value;
    let respuesta4 = document.querySelector('#respuesta4').value;
    let respuesta5 = document.querySelector('#respuesta5').value;

    let mensaje = fecha.toLocaleDateString('es-Es') + '\n' + `1. ${respuesta1} \n 2. ${respuesta2} \n 3. ${respuesta3} \n 4. ${respuesta4} \n 5. ${respuesta5}`
}

function volveraIntentar(){
    location.reload()
}