"use strict";

const select = document.querySelector("#select");
//
//Funciones
//
/**
 * Validaremos una palabra de 5 letras que empieza con a y termina con a
 * Pista: regexObj.test(texto) Devuelve true o false segun el patron buscado coincide con la cadena
 */

/**
 * 
 * @param {object} pattern Patrón a comparar con el string
 * @param {string} msgPrompt Mensaje del prompt para que el usuario sepa lo que hacer
 */
const validarExpresionRegular = (pattern, msgPrompt) => {
    const texto = prompt(msgPrompt);
    if(pattern.test(texto)){ //cumple con el patrón
        alert("Muy bien!")
    }else{
        alerta(`${texto} no cumple con el patrón.: ${msgPrompt}`);
    }
}

/**
 * @param {string} mensaje
 */
const alerta = (mensaje) => {
    const msgEl = document.querySelector(".mensajes");
    msgEl.innerHTML = `<strong style="color:red"> ${mensaje} </strong>`;
}


const buscarNumeros = () => {
    const patron = /\d+/g;
    const cadena = prompt("Dame mucho texto alfanumerico");
    let resultado = cadena.match(patron);
    return resultado;
}


//
//Eventos
//
/**
 * 
 * @param {Object} e Evento del selector 
 */
select.onchange = (e) => {
    switch (e.target.value) {
        case "0":
            break;
        case "1":
            // validaremos una palabra de 5 letras que empieza con a y termina con a
            validarExpresionRegular(/^[Aa].{3}a$/, "palabra de 5 letras");
            break;
        case "2":
            // validaremos una coordenada con formato "999,999"
            validarExpresionRegular(/^\d{1,3},\d{1,3}$/, "coordenada");
            break;
        case "3":
            // validaremos una fecha con formato "Lunes,31"
            validarExpresionRegular(/^(Lunes|Martes|Miercoles|Jueves|Viernes|Sabado|Domingo),[ ]?[1-3]?[0-9]$/,"Fecha dd/mm/aaaa");
            break;
        case "4":
            // validar dia/mes/año
            validarExpresionRegular(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/, "Fecha:dd/mm/aaa");
            break;
        case "5":
            // validar numero entero positivo o negativo
            validarExpresionRegular(/^[-+]?[0-9]{1,3}$/, "Numero entero");
            break;
        case "6":
            //comprobar si una palabra empieza por hiper o hipo
            validarExpresionRegular(/^(hiper|hipo)/);
            break;
        case "7":
            //mínimo 6 caracteres
            validarExpresionRegular(/^.{6,}$/, "Hay menos de 6 caracteres");
            break;
        case "8":
            //capital de españa
            validarExpresionRegular(/Madrid/i, "No es la capital de España"); //i es un flag que no distuingue mayus/minus y va despues de la barra /
            break;
        case "9":
            //validar una cadena vacia
            validarExpresionRegular(/\s*^/);
            break;
        case "match":
            //buscar los numeros
            const msgEl = document.querySelector(".mensajes");
            let numeros = buscarNumeros();
            msgEl.innerHTML=`<div>${numeros.join("<br>")}</div>`;
            break;
    }
}



