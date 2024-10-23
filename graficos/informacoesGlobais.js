const url='https://raw.githubusercontent.com/profvivi/Formadores-Redes-Sociais/refs/heads/main/db.json';


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = 
        `Em um mundo com <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas, a educação emerge 
        como a verdadeira chave para a transformação social. 
        Sendo que <span>${dados.total_pessoas_com_acesso_a_educacao}</span> de pessoas têm acesso à educação com tempo médio 
        tempo de <span>${dados.tempo_medio_dia_estudando}</span> horas de estudos por dia.`
        console.log(paragrafo)

        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
        }
    
        visualizarInformacoesGlobais()  //invocar a função

