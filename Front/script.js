const resultsDiv = document.getElementById("results")

async function fetchFuncionarios(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()
        if(data.error){
            resultsDiv.innerHTML = "<p>Erro ao buscar dados!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(Funcionarios => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${Funcionarios.imagem}" alt="${Funcionarios.nome}"
                <h2>${Funcionarios.nome}</h2>
                <h3>${Funcionarios.descricao}</h3>
                <h4>${Funcionarios.categoria}</h4>
                <h5>${Funcionarios.setor}</h5>
                <p>${Funcionarios.salario.toFixed(2)}</p>
            `
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar produtos!</p>"
    }

}

fetchFuncionaios()