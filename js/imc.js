function corporal(){
    const massa = parseFloat(document.getElementById("altura").value);
    const altitude = parseFloat(document.getElementById("kilo").value);

    let resultado = massa * 2 
    let result = parseInt(altitude / resultado)
     
document.getElementById("numero").innerHTML=result;

if (result <= 16){
    document.getElementById("niveis").innerHTML = "Magreza extrema!"
}
else if (result >= 16 && result < 18.5){
    document.getElementById("niveis").innerHTML = "Abaixo do peso!"
}
else if (result >= 18.5 && result < 25){
    document.getElementById("niveis").innerHTML = "Peso normal!"
}
else if (result >= 25 && result < 30){
    document.getElementById("niveis").innerHTML = "Sobrepeso!"
}
else{
    document.getElementById("niveis").innerHTML = "Obesidade!"
}
}

