// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
//  является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, 
//  то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.


function primeOrNot (number) {
    if (number > 1000) {return "данные неверны"}
    else if (number % 1 !== 0) {return `${number} не является простым числом`}
    else if (number === 2) {return `${number} является простым числом`}
    else if (number === 1 || number === 0) {return `${number} не является простым числом`}
    else if (number < 1001 && number>2) {
        for (let i = 2; i <= (number -1); i++) {
            if (number % i === 0) {return `${number} не является простым числом`}
            else {return `${number} является простым числом`}
        }
        }
    }
    console.log (primeOrNot(0.5))