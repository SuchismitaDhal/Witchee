/********
	function tracks mouse movement for custom cursor
********/
var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});



/********
	event listeners when cursor enters and exits the logo
********/

var logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function () {
    //console.log("Mouse hovered");
    cursor.classList.add('cursor-hit');
});

logo.addEventListener('mouseleave', function () {
    cursor.classList.remove('cursor-hit');
    //console.log("transition done");
});


/********
	swipe functionality on spacebar
********/
var item = document.querySelector('.footer h1:nth-child(2)');
document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        item.setAttribute("style", "-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);");
        var intr = setInterval(function () { window.location.href = "src/index.html"; }, 10000);
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        item.setAttribute("style", "-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);");
        clearInterval(intr);
    }

}
