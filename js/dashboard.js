window.onload = async function () {
  try {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    // DADOS FAKE SÓ PRA TESTAR
    const dados = {
      metricas: {
        totalGasto: 12345.67,
        totalCompras: 18,
        fornecedoresUnicos: 5,
        ticketMedio: 685.87,
        totalItens: 72,
        maiorCompra: 3200,
        categoriasUnicas: 4,
        mediaMensal: 4100,
        ultimos30Dias: 3800,
        ultimos90Dias: 10200,
        menorCompra: 120,
        mediana: 600,
        desvioPadrao: 300,
        coeficienteVariacao: 22,
        mediaItensPorCompra: 4,
        mesesAtivos: 6,
        crescimentoMensal: 8.2
      },
      rankings: {
        fornecedoresValor: [],
        pecasQuantidade: [],
        categoriasValor: [],
        fornecedoresFrequencia: []
      },
      temporal: {
        evolucaoMensal: [],
        diasDaSemana: {},
        horasDoDia: {}
      },
      insights: [],
      distribuicoes: {
        faixasValor: {},
        faixasQuantidade: {},
        faixasValorUnitario: {}
      }
    };

    displayDashboardPremium(dados);
  } catch (e) {
    showError(e.message);
  }
};
