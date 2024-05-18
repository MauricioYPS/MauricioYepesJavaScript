let array = [
    {
        id : 1,
        titulo : 'Sacar el perroo',
        texto: 'pasear al perro por la cuadra',
        realizada: false
    },

    {   
        id : 2,
        titulo : 'Pagar servicios',
        texto: 'Pagar la luz, el agua, el internet y el gas',
        realizada: false
    },
    {
        id : 3,
        titulo : 'Hacer trabajos de programacion',
        texto: 'Realizar las actividades de programacion del bootcamp',
        realizada: true
    },
]

let idGlobal = array.length;
let tarjetasPintadas = document.querySelector("#tarjetasPintadas");


function pintarTarjetas(array, padre) {
    padre.innerHTML = '';
    if (array.length === 0) {
        padre.innerHTML = '<h2 class="txtt">NO HAY NOTAS PARA MOSTRAR</h2>';
        return;
    }
    array.forEach(nota => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-md-4 note-card";
        tarjeta.innerHTML = `
            <div class="card m-3">
                <div class="card-header">
                    <div class="form-check d-flex">
                        <input class="form-check-input" type="checkbox" ${nota.realizada ? "checked" : ""} onclick="toggleRealizada(${nota.id})">
                        <label class="form-check-label ${nota.realizada ? 'realizada' : ''}">
                            ${nota.titulo}
                        </label>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger" onclick="borrarNota(${nota.id})">Borrar</button>
                </div>
            </div>`;
        padre.appendChild(tarjeta);
    });
}

function toggleRealizada(id) {
    let nota = array.find(n => n.id === id);
    nota.realizada = !nota.realizada;
    aplicarFiltros();
}
function borrarNota(id) {
    array = array.filter(n => n.id !== id);
    aplicarFiltros();
}
function agregarNota(titulo, texto) {
    if (titulo.value.trim() === '' || texto.value.trim() === '') return;
    idGlobal++;
    let nuevaNota = { id: idGlobal, titulo: titulo.value, texto: texto.value, realizada: false };
    array.push(nuevaNota);
    titulo.value = '';
    texto.value = '';
    aplicarFiltros();
}
function clearInputs() {
    document.getElementById('tittle').value = '';
    document.getElementById('text').value = '';
}
function aplicarFiltros() {
    let textoBusqueda = document.getElementById('search').value.toLowerCase();
    let mostrarRealizadas = document.getElementById('filterDonups').checked;

    let notasFiltradas = array.filter(nota => {
        let cumpleTexto = nota.titulo.toLowerCase().includes(textoBusqueda) || nota.texto.toLowerCase().includes(textoBusqueda);
        let cumpleRealizadas = mostrarRealizadas ? nota.realizada : true;
        return cumpleTexto && cumpleRealizadas;
    });

    pintarTarjetas(notasFiltradas, tarjetasPintadas);
}
document.getElementById('botonGuardar').addEventListener('click', () => {
    let titulo = document.getElementById('tittle');
    let texto = document.getElementById('text');
    agregarNota(titulo, texto);
});
document.getElementById('search').addEventListener('keyup', aplicarFiltros);
document.getElementById('filterDonups').addEventListener('change', aplicarFiltros);

aplicarFiltros();




