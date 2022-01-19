let idade = 20

if(idade > 18){
   console.log("Você é maior de idade.")
}else{
   console.log("Você é menor de idade.") 
}

let maior = 24
let humano = true

if(maior > 18 && humano == true){
   console.log("As duas condições são verdadeiras.")
}else{
   console.log("As duas condições não são verdadeiras.")
}

let janeiro = true
let dezembro = true

if(janeiro == true || dezembro == true){
    console.log("Feliz aniversário!")
}else{
    console.log("Não é seu aniversário.")
}

//Exercício Bônus

let pessoa = "Roberta"

if (pessoa.substring(0,1) === "R") {
  console.log(`${pessoa}, seu nome começa com a letra R`)
}

let nome = "Estela"
let sobreNome = "Carvalho"

 if (sobreNome.length > 6 || nome.substring(0,1) === "E") {
     console.log(`${nome}, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E`)
 }