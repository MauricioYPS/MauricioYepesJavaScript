let array = [
    { id: 1,
     titulo: 'Sacar el perro',
     texto: 'Pasear al perro por la cuadra',
     realizada: false
     },
    { id: 2, titulo: 'Pagar servicios',
      texto: 'Pagar la luz, el agua, el internet y el gas', 
      realizada: false
     },
    { id: 3, 
    titulo: 'Hacer trabajos de programación',
    texto: 'Realizar las actividades de programación del bootcamp',
    realizada: true },
];

let idGlobal = array.length;
let tarjetasPintadas = document.querySelector("#tarjetasPintadas");

function pintarTarjetas(array, padre) {
    padre.innerHTML = '';
    array.forEach(nota => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "note-card";
        tarjeta.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <div class="form-check">
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
    let mostrarRealizadas = document.getElementById('filterDone').checked;

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
document.getElementById('filterDone').addEventListener('change', aplicarFiltros);

aplicarFiltros();