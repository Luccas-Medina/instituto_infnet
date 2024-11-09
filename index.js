const resultado = document.getElementById('resultado');
const parlamentares = document.getElementById('parlamentar');

async function buscaPartidos() {
    await fetch('https://dadosabertos.camara.leg.br/api/v2/partidos')
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = '';
            data.dados.forEach(partido => {
                resultado.innerHTML += `<button onclick='buscaParlamentar(${partido.id})'>Nome: ${partido.nome}</button>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}

async function buscaParlamentar(idPartido) {
    await fetch(`https://dadosabertos.camara.leg.br/api/v2/partidos/${idPartido}/membros`)
        .then(response => response.json())
        .then(data => {
            parlamentares.innerHTML = '';
            data.dados.forEach(parlamentar => {
                parlamentares.innerHTML += `<p>Nome: ${parlamentar.nome}, Partido: ${parlamentar.siglaPartido}</p>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}
