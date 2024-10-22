const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/educacao/educacao-dados-globais.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);




    //console.log("Temos "+dados.total_pessoas_mundo+" pessoas mundo verdadeira chave para a transformação social.");
    //console.log("E "+dados.total_acesso_educacao+"  têm acesso à educação.");
    //console.log("Ficando em média "+dados+" de estudos por dia.");

}

vizualizarInformacoesGlobais();

