// kata link: https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  // start with p0
  // then run p0 + (p0 * percent/100) + aug
  // if above is >= p, return that result
  // else rerun the calculation on the previous result and check again
  let population = p0;
  let i = 0;
  while (population < p) {
    let percentageRise = (population * percent) / 100;
    population = Math.floor(population + percentageRise + aug);
    i++;
  }
  console.log(population);
  console.log(i);
  return i;
}
