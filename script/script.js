const button = document.querySelector(".transacao__button");
button.addEventListener("click", function(event){
    event.preventDefault();


    const tabela = document.querySelector(".extrato__table");
    const inputName = document.querySelector("#transacaoInputName");
    const inputMoney = document.querySelector("#transacaoInputMoney");
    const inputData = document.querySelector("#transacaoInputDate");


    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaNomeInput = document.createTextNode(inputName.value);
    colunaNome.appendChild(colunaNomeInput);
    if (inputName.value === ""){
        alert ("preencha o nome")
    }

    const colunaMoney = document.createElement("td");
    const colunaMoneyInput = document.createTextNode(inputMoney.value);
    colunaMoney.appendChild(colunaMoneyInput);

    if (inputMoney.value === "" && isNaN){
        alert ("preencha um número")
    }

    const colunaData = document.createElement("td");
    const colunaDataInput = document.createTextNode(inputData.value);
    colunaData.appendChild(colunaDataInput);

    if (inputData.value === "" && isNaN){
        alert ("preencha uma data")
    }

    linha.appendChild(colunaNome);
    linha.appendChild(colunaMoney);
    linha.appendChild(colunaData);
    tabela.appendChild(linha);

    
});