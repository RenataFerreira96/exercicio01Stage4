let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

let checkNumber = firstNumber === secondNumber ? 'São iguais' : 'São diferentes'

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber


alert ('A soma dos dois números é: ' + sum)
alert ('A subtração dos dois números é: ' + sub)
alert ('A multiplicação dos dois números é: ' + mult)
alert ('A divisão dos dois números é: ' + div.toFixed(2))
alert ('O resto da divisão dos dois números é: ' + restdiv)
alert ('Os dois números inseridos são: ' + checkNumber)


if(sum % 2 === 0 )
alert ('A soma dos dois números é par!')
else(sum % 2 !== 0)
alert ('A soma dos dois números é impar!')
