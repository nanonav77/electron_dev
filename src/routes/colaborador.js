
const formAddColaborador = document.getElementById('idFormAddColaborador');
const campoNombreCompleto = document.getElementById('inputAdNombre');

formAddColaborador.addEventListener('submit',(e) => {

    e.preventDefault();

    console.log(campoNombreCompleto.value);

})