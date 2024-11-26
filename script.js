let visor = document.getElementById("visor");
let expression = "";

function adicionarValor(value){

    if(visor.innerText == "0" && value == ".") {
        expression = value;
    } else {
        expression += value;
    }
    visor.innerText = expression;

}

function limpar() {
    visor.innerText = "0";
    expression = "";
}

function calcular() {
    
    try {
      let result = eval(expression);
      visor.innerText = result;
            Int.adicionarValor = result;
            console.log(result);

            

    } catch (error) {
      visor.value = 'Erro';

    }
}