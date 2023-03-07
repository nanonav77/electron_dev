
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


formAddColaborador.addEventListener('submit',(e) => {

    e.preventDefault();

    console.log(opcionTipo.value);

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