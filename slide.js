function getWeekNum() {
  var date = new Date();
  var y, m, d, n;

  y = date.getFullYear(); //yyyy
  m = date.getMonth(); // month number 0-11
  d = date.getDate(); // day number 1-31

  var day = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

  if (isLeapYear(y)) day[1] = 29;

  if (m == 0) n = d;
  else {
    n = d;
    for (var i = 0; i < m; ++i) n += day[i];
  }

  return Math.ceil(n / 7);
}



function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function slideshow() {
  var pane = new Array();
  var pic = new Array('leaf', 'monarch', 'street', 'reflx');

  for (var i = 0; i <= 3; ++i)
    pane[i] = document.getElementById("frame-" + (i + 1));

  var fidx = Math.floor(Math.random() * 4);
  var pidx = Math.floor(Math.random() * 4);

  pane[fidx].classList.remove('app');
  pane[fidx].classList.add('disapp');

  await sleep(1500);

  if (fidx % 2 == 0)
    pane[fidx].src = "slideshow/" + pic[pidx] + "-left.jpg";
  else
    pane[fidx].src = "slideshow/" + pic[pidx] + "-right.jpg";

  pane[fidx].classList.remove('disapp');
  pane[fidx].classList.add('app');

  console.log("changed picture");

  //console.log("print this : sleep ends");
}

setInterval(slideshow, 3000);

