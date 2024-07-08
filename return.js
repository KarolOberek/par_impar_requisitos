prompt = require ('prompt-sync')()
const par_impar = require ("./par_impar.js")

const numero = prompt("digite um número: ")

let retorno = par_impar.par_ou_impar(numero)

console.log(retorno)