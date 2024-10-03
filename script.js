function simularCrescimento() {
    // Obtendo valores de entrada
    const anoInicial = parseInt(document.getElementById('anoInicial').value);
    const populacaoInicial = parseFloat(document.getElementById('populacaoInicial').value);
    const taxaCrescimento = parseFloat(document.getElementById('taxaCrescimento').value) / 100;
    const anoFinal = parseInt(document.getElementById('anoFinal').value);

    // Validando entradas
    if (isNaN(anoInicial) || isNaN(populacaoInicial) || isNaN(taxaCrescimento) || isNaN(anoFinal)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Limpando resultado anterior
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "";

    // Tabela para exibir o resultado
    let tabela = "<table><tr><th>Ano</th><th>População</th></tr>";

    // Calculando crescimento para cada ano
    let populacaoAtual = populacaoInicial;
    for (let ano = anoInicial; ano <= anoFinal; ano++) {
        tabela += `<tr><td>${ano}</td><td>${populacaoAtual.toFixed(0)}</td></tr>`;
        populacaoAtual += populacaoAtual * taxaCrescimento;
    }

    tabela += "</table>";

    // Exibindo o resultado
    resultadoDiv.innerHTML = tabela;
}
