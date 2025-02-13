let numberToFind = 0;
let attempts = 0;

function refresh(){
numberToFind =parseInt(Math.random() * 100);
console.log(numberToFind)

}

function verifyNumber(){
    let element = document.getElementById("aposta").value;

    if(element > 100 || element < 0){
document.getElementById("apostaFeita").innerHTML = "Aposta inválida! de 0 a 100 amigo."
return;
    }

    if(element > numberToFind){
        attempts++;
        document.getElementById("apostaFeita").innerHTML = "O número é menor amigo!"
    }
    else if(element < numberToFind){
        attempts++;
        document.getElementById("apostaFeita").innerHTML = "O número é maior amigo!"
    }
    else{
        document.getElementById("apostaFeita").innerHTML = "Acertou em cheio! você precisou de " + attempts + " tentativas"
    }
}

refresh();