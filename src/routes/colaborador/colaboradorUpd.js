const dbConfig = require("../config/dbConfig");

// ---- DECLARAMOS LOS ELEMENTOS DEL DOM ----

var body = document.getElementsByTagName("body")[0];
body.addEventListener("load", init(), false);

const opcionColaboradores = document.getElementById('inputListColaboradores');

const botonRefrescar = document.getElementById('botonUpdRefrescar');

// LLAMAMOS LA FUNCIÓN QUE TRAE LA LISTA DE COLABORADORES
// EN EL MOMENTO QUE SE CREA LA VENTANA
function init() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', dbConfig.HOST + 'colaboradores');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        let response = xhr.response;
        setColaboradoresOpcion(response); 
    };
};


// EL BOTON QUE REFRESCA LA LISTA DE COLABORADORES, EN CASO DE NECESITARSE
botonRefrescar.addEventListener('click',(e) => {
    
    init();

});

// DECLARAMOS FUNCION PARA COMPLETAR EL SELECTOR 
// CON LA LISTA DE COLABORADORES

function setColaboradoresOpcion(data){
    
    opcionColaboradores.innerText = null; // LIMPIAMOS EL SELECTOR  
    
    let elementoS = document.createElement("option");
    elementoS.value = 0;
    elementoS.text = "Seleccionar...";
    opcionColaboradores.options.add(elementoS);

    for (i=0; i<data.length; i++) {
        
        let colaboradorItem = data[i].NUMERO + " - "+ data[i].NOMBRE;
       
        let elemento = document.createElement("option");
        elemento.value = data[i].NUMERO;
        elemento.text = colaboradorItem;
        opcionColaboradores.options.add(elemento);
    };
};
