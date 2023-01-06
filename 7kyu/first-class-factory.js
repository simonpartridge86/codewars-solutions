// kata link:

function factory(num) {
  //map over myArray
  //for each element, return element * num
  //return new array
  return (arr) => {
    let result = arr.map((x) => x * num);
    console.log(result);
    return result;
  };
}
