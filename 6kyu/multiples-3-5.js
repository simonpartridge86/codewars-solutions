// kata link: https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let sum = 0;
  let i = 0;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
    i++;
  }
  return sum;
}
