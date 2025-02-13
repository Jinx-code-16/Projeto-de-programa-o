function calcular(){
    const n1 = parseFloat(document.getElementById("number").value);
    const n2 = parseFloat(document.getElementById("number2").value);

    let adicao = n1 + n2
    let subtracao = n1 - n2
    let multiplicação = n1 * n2
    let divisao = n1 / n2

    document.getElementById("adicao").innerHTML=adicao;
    document.getElementById("subtracao").innerHTML=subtracao;
    document.getElementById("multiplicacao").innerHTML=multiplicação;
    document.getElementById("divisao").innerHTML=divisao;
}
