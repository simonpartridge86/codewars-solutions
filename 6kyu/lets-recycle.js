// kata link: https://www.codewars.com/kata/5b6db1acb118141f6b000060

function recycle(array) {
  let outputArray = [[], [], [], []];
  for (let i = 0; i < array.length; i++) {
    if (array[i].material === "paper") {
      outputArray[0].push(array[i].type);
    }
    if (array[i].material === "glass") {
      outputArray[1].push(array[i].type);
    }
    if (array[i].material === "organic") {
      outputArray[2].push(array[i].type);
    }
    if (array[i].material === "plastic") {
      outputArray[3].push(array[i].type);
    }
    if (array[i].secondMaterial) {
      if (array[i].secondMaterial === "paper") {
        outputArray[0].push(array[i].type);
      }
      if (array[i].secondMaterial === "glass") {
        outputArray[1].push(array[i].type);
      }
      if (array[i].secondMaterial === "organic") {
        outputArray[2].push(array[i].type);
      }
      if (array[i].secondMaterial === "plastic") {
        outputArray[3].push(array[i].type);
      }
    }
  }
  return outputArray;
}
