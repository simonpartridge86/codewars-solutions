// kata link: https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  let xCount = 0,
    yCount = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      xCount++;
    }
    if (walk[i] === "s") {
      xCount--;
    }
    if (walk[i] === "e") {
      yCount++;
    }
    if (walk[i] === "w") {
      yCount--;
    }
  }
  if (yCount === 0 && xCount === 0 && walk.length === 10) {
    return true;
  }
  return false;
}
