function conversao(){
    const moeda = parseFloat(document.getElementById("dol").value);
    const temperatura = parseFloat(document.getElementById("celcius").value);
    const massa = parseFloat(document.getElementById("kilo").value);

    let roubo = parseInt(moeda * 5.81)
    let calor = temperatura * 1.8 + 32
    let peso = parseInt(massa * 2.2046)

    document.getElementById("rial").innerHTML=roubo;
    document.getElementById("graus").innerHTML=calor;
    document.getElementById("pesagem").innerHTML=peso;
}