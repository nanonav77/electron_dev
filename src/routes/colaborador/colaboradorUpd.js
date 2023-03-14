const dbConfig = require("../config/dbConfig");

// ---- DECLARAMOS LOS ELEMENTOS DEL DOM ----

var body = document.getElementsByTagName("body")[0];
body.addEventListener("load", init(), false);

const opcionColaboradores = document.getElementById('inputListColaboradores');

const botonRefrescar = document.getElementById('botonUpdRefrescar');

const tablaColaboradores = document.getElementById("tablaUpdColaboradores");

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
        setColaboradoresTabla(response); 
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

    // Se recorre la lista de colaboradores que devuelve la base de datos, para ingresarlas al selector

    for (i=0; i<data.length; i++) {
        
        let colaboradorItem = data[i].NUMERO + " - "+ data[i].NOMBRE;
       
        let elemento = document.createElement("option");
        elemento.value = data[i].NUMERO;
        elemento.text = colaboradorItem;
        opcionColaboradores.options.add(elemento);
    };
};

// DECLARAMOS FUNCION PARA COMPLETAR LA TABLA 
// CON LA LISTA DE COLABORADORES

function setColaboradoresTabla(data){
    
    // LIMPIAMOS LA TABLA EN CADA LLAMADA DE ACTUALIZACIÓN
    while(tablaColaboradores.rows.length > 1) {
          tablaColaboradores.deleteRow(1);
    }
    // Se recorre la lista de colaboradores que devuelve la base de datos, para ingresarlas a la tabla

    for (i=0; i<data.length; i++) {
    
        var row = tablaColaboradores.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = data[i].NUMERO;
        cell1.className = "table-secondary text-center";
        
        cell2.innerHTML = data[i].NOMBRE;
        cell2.className = "table-secondary text-center";

        cell3.innerHTML = data[i].IDENTIFICACION;
        cell3.className = "table-secondary text-center";

        cell4.innerHTML = data[i].TELEFONO;
        cell4.className = "table-secondary text-center";

        cell5.innerHTML = data[i].NUM_TARJETA;
        cell5.className = "table-secondary text-center";
        
        cell6.innerHTML = "<td class='actions-hover actions-fade'><a href='javascript:mostrarColaboradorActualizar("+data[i].NUMERO+");'><i class='bi bi-pencil-square'></i></a></td>"
        cell6.className = "table-secondary text-center";
    };
};


//FUNCIÓN PARA MOSTRAR EL COLABORADOR A ACTUALIZAR

function mostrarColaboradorActualizar(numero){

    const xhr = new XMLHttpRequest();
    xhr.open("POST", dbConfig.HOST + "getOneColaborador");
    
    const numeroID = JSON.stringify({"numero": numero} );
 
    xhr.onload = () => {
    
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    xhr.send(numeroID);

};