const par_ou_impar = (numero) => {
let array = numero.split("")
let soma = 0

array.forEach(elemento => {
    soma += +elemento
});
if (soma %2 == 0){
    return "impar"
}
return "par"
}
module.exports = {
    par_ou_impar
}