const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML= voce sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarinformacoesGlobais()