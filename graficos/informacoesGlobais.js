const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/educacao/educacao-dados-globais.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `Em um mundo com ${dados.total_pessoas_mundo} bilhões de pessoas, a educação emerge como a verdadeira chave para a transformação social. 
            Sendo que ${dados.total_pessoas_com_acesso_a_educacao} de pessoas têm acesso à educação com tempo médio tempo de ${dados.tempo_medio_dia_estudando} horas de estudos por dia.
            Contudo, a jornada educacional não se resume apenas a diplomas. 
            Ela envolve um desejo profundo por conhecimento e crescimento pessoal, refletindo a necessidade de um ambiente que valorize a formação integral. 
            À medida que a sociedade avança, o papel da educação se torna ainda mais crucial, não apenas para abrir portas, mas para cultivar um futuro onde todos possam encontrar seu lugar e contribuir de forma significativa. Assim, ao olharmos para o horizonte, 
            percebemos que o verdadeiro sucesso está enraizado na educação que transforma`
    console.log(paragrafo)



    //console.log("Temos "+dados.total_pessoas_mundo+" pessoas mundo verdadeira chave para a transformação social.");
    //console.log("E "+dados.total_acesso_educacao+"  têm acesso à educação.");
    //console.log("Ficando em média "+dados+" de estudos por dia.");

}

vizualizarInformacoesGlobais();

