// kata link: https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

function bowlingScore(frames) {
  let scoreArray = frames.split(" ").map((e) => {
    return e.split("");
  });
  let totalScore = 0;

  function spareBonus(arr, i) {
    if (arr[i + 1][0] === `X`) {
      return 10;
    }
    return Number(arr[i + 1][0]);
  }

  function strikeBonus(arr, i) {
    if (i < 8) {
      if (arr[i + 1][0] === `X`) {
        return 10 + spareBonus(arr, i + 1);
      }
      if (arr[i + 1][1] === `/`) {
        return 10;
      }
      return Number(arr[i + 1][0]) + Number(arr[i + 1][1]);
    }
    if ((i = 8)) {
      if (arr[9][0] === `X` && arr[9][1] === `X`) {
        return 20;
      }
      if (arr[9][0] === `X`) {
        return 10 + Number(arr[9][1]);
      }
      if (arr[9][1] === `/`) {
        return 10;
      }
      return Number(arr[9][0]) + Number(arr[9][1]);
    }
  }

  function finalFrame(arr) {
    if (arr[1] === "X" && arr[2] === "X") {
      return 30;
    }
    if (arr[1] === "X") {
      return 20 + Number(arr[2]);
    }
    if (arr[1] === "/" && arr[2] === "X") {
      return 20;
    }
    if (arr[1] === "/") {
      return 10 + Number(arr[2]);
    }
    return Number(arr[0]) + Number(arr[1]);
  }

  scoreArray.forEach((item, index, arr) => {
    if (index < 9) {
      if (item[0] === "X") {
        totalScore += 10 + strikeBonus(arr, index);
      } else if (item[1] === "/") {
        totalScore += 10 + spareBonus(arr, index);
      } else {
        totalScore += Number(item[0]) + Number(item[1]);
      }
    } else {
      totalScore += finalFrame(item);
    }
  });

  return totalScore;
}
