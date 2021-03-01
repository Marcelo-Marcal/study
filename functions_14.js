// Switch: e semalhante if e else
// Ex: Calculadora
function calculate(number1, operator, number2){

switch (operator) {
  case '+':
    //codigo
    result = number1 + number2
    break
  case '-':
    //codigo p/ expression b
    result = number1 - number2
    break
  case '*':
    //codigo
    result = number1 * number2
    break
  case '/':
    //codigo
    result = number1 / number2
    break    
  default:
    console.log('não implementado')
    break
  }
  return result
}

console.log(calculate(4, '+', 8))