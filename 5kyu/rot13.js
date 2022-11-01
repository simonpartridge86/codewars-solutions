// kata link: https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  console.log(message);
  let result = [];
  for (let i = 0; i < message.length; i++) {
    if (/[a-z]/.test(message[i])) {
      let num = message.charCodeAt(i) + 13;
      if (num <= 122) {
        result.push(String.fromCharCode(num));
      } else if (num > 122) {
        result.push(String.fromCharCode(num - 26));
      }
    } else if (/[A-Z]/.test(message[i])) {
      let num = message.charCodeAt(i) + 13;
      if (num <= 90) {
        result.push(String.fromCharCode(num));
      } else if (num > 90) {
        result.push(String.fromCharCode(num - 26));
      }
    } else {
      result.push(message[i]);
    }
  }
  console.log(result);
  return result.join("");
}
