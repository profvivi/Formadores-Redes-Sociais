const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/educacao/educacao-dados-globais.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    console.log("Temos "+dados.total_pessoas_mundo+" pessoas mundo verdadeira chave para a transformação social.");
    console.log("E "+dados.total_acesso_educacao+"  têm acesso à educação.");
    console.log("Ficando em média "+dados+" de estudos por dia.");

}

vizualizarInformacoesGlobais();

