// kata link: https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function (morseCode) {
  return morseCode
    .split("   ")
    .map((item) => item.split(" "))
    .map((item) => item.map((char) => MORSE_CODE[char]).join(""))
    .join(" ")
    .trim();
};
