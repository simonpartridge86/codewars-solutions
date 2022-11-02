// kata link: https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  let result = [];
  if (b.length === 0 || a.length === 0) {
    return a;
  } else {
    a.forEach((num) => {
      if (!b.includes(num)) {
        result.push(num);
        console.log(result);
      }
      return;
    });

    return result;
  }
}
