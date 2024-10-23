const url='https://raw.githubusercontent.com/profvivi/Formadores-Redes-Sociais/refs/heads/main/db.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = 
        `Em um mundo com ${dados.total_pessoas_mundo} bilhões de pessoas, a educação emerge 
        como a verdadeira chave para a transformação social. 
        Sendo que ${dados.total_pessoas_com_acesso_a_educacao} de pessoas têm acesso à educação com tempo médio 
        tempo de ${dados.tempo_medio_dia_estudando} horas de estudos por dia.`

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais();

