// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только 
// числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции
//  корректное название, вызовите функцию, проанализируйте синтаксис.


let arr = [4, 6, 0, "idj", 9, null, NaN, 10, 0,"12", undefined];
function returnOddAndEven(x) {
  let zeroElements = 0;
  let evenElements = 0;
  let oddElements = 0;
  x.forEach((item) => {
    if (item === 0) {
      zeroElements++;
    } else if (typeof item === "number") {
    if (item % 2 === 0) {
      oddElements++;
    }
    if (item % 2 === 1) {
      evenElements++;
    }
  }});
  return `чётных элементов - ${oddElements} , нечётных элементов - ${evenElements}, нулей - ${zeroElements}`;
}

console.log (returnOddAndEven(arr))