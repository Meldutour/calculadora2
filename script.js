function agregar(numeros) {
    console.log('prueba ' + numeros)
    
    let validador = validarCantidadDeNumeros(document.querySelector('.display').innerText)
    console.log('Validador ' + validador)
    if (validador == 2) {
        document.querySelector('.display').innerText += numeros
        console.log('en caso verdadero')
    }else{
        console.log('en caso falso')
    }
    
    
}


function limpiar() {
    document.querySelector('.display').innerText = ''
}


function igual() {
    //variable
    var cuenta = document.querySelector('.display').innerText
    console.log(cuenta)
    console.log(cuenta + 3) //solucionar que pueda hacer la cuenta con un tipo de dato numerico
    console.log(cuenta + 78) 
    console.log(eval(cuenta))
    document.querySelector('.display').innerText = eval(cuenta)    
}

function validarCantidadDeNumeros (display) {
    console.log('la cantidad es: ' + display.length)
    let flag = 0;
    //16 es el limite
    if (display.length >=12) {
        //el caso verdadero
        console.log('mayor o igual a 13')
        flag = 1
    }else{
        //el caso falso
        console.log ('menor a 13')
        flag = 2
    }
    return flag
}