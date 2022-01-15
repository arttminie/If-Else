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

let r = true

if(r == true){
   console.log("Seu nome começa com r")
}else{
   console.log("Seu nome não começa com r")
}

let carvalho = true
let e = false

if(carvalho == true || e == false){
    console.log("Apenas uma condição é verdadeira")
}else{
    console.log()
}