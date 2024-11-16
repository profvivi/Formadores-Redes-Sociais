import { getCSS, tickConfig } from "./common.js"

async function quantidadeEstudante() {
    //const url = 'https://raw.githubusercontent.com/profvivi/Communication/refs/heads/main/Estudante/numero-usuarios.json';
    const url = 'https://raw.githubusercontent.com/profvivi/Communication/refs/heads/main/Estudante/numerosEstudante.json';
    const res = await fetch(url)
    const dados = await res.json()
    const dadosNaEducacao = Object.keys(dados)
    const quantidadeDeEstudante = Object.values(dados)

    const data = [
        {
            x: dadosNaEducacao, 
            y: quantidadeDeEstudante, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Dados de Acesso à Educação',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Dados Educação',
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Acesso em bilhões à educação',
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeEstudante()
