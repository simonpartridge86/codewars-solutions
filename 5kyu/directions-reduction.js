// kata link: https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      i++;
    } else {
      let lastElement = result.pop();
      if (
        (lastElement === "NORTH" && arr[i] === "SOUTH") ||
        (lastElement === "SOUTH" && arr[i] === "NORTH") ||
        (lastElement === "EAST" && arr[i] === "WEST") ||
        (lastElement === "WEST" && arr[i] === "EAST")
      ) {
      } else {
        if (lastElement !== undefined) {
          result.push(lastElement);
        }
        result.push(arr[i]);
      }
    }
  }
  return result;
}
