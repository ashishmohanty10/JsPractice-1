function startTime() {
  const today = new Date();

  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("txt").innerHTML =
    hour + ":" + minutes + ":" + seconds;

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
