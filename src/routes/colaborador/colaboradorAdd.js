
const dbConfig = require("../config/dbConfig");

// ---- DECLARAMOS LOS ELEMENTOS DEL DOM ----

const formAddColaborador = document.getElementById('idFormAddColaborador');

const campoNombreCompleto = document.getElementById('inputAdNombre');
const campoIdentificacion = document.getElementById('inputAdIdentificacion');
const campoTelefono = document.getElementById('inputAdTelefono');
const campoTarjeta = document.getElementById('inputAdTarjeta');
const campoObservaciones = document.getElementById('inputAdObservaciones');

const opcionTipo = document.getElementById('inputAdTipo');
const opcionGenero = document.getElementById('inputAdGenero');

const botonLimpiar = document.getElementById('botonAdLimpiar');

// LLAMAMOS LA FUNCION DEL FORM PARA AGREGAR UN NUEVO COLABORADOR

formAddColaborador.addEventListener('submit',(e) => {

    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", dbConfig.HOST + "colaborador");
    
    const body = JSON.stringify({"nombreCompleto": campoNombreCompleto.value, "identificacion": campoIdentificacion.value, "telefono": campoTelefono.value, "tarjeta": campoTarjeta.value, "observaciones": campoObservaciones.value, "tipo": opcionTipo.value, "genero": opcionGenero.value} );
    xhr.onload = () => {
    
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    xhr.send(body);

});


// --- DECLARAMOS FUNCION PARA LIMPIAR LOS CAMPOS DE INGRESO ---

botonLimpiar.addEventListener('click',(e) => {

    e.preventDefault();

    campoNombreCompleto.value = "";
    campoIdentificacion.value = "";
    campoTelefono.value = "";
    campoTarjeta.value = "";
    campoObservaciones.value = "";

});