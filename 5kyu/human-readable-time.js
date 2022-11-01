// kata link: https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = Math.floor(seconds - hours * 3600 - mins * 60);

  let timeArray = [hours, mins, secs];
  let result = [];
  timeArray.forEach((time) => {
    if (time < 10) {
      result.push("0" + time);
    } else {
      result.push(time);
    }
  });

  return result.join(":");
}
