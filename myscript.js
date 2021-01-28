
function myClick(elem, src) {
    
    event.preventDefault();
    console.log("HI");
    document.getElementById("modal").style.display = "block";
    document.getElementById(src).src = src == "videoSrc" ? elem.src : elem.childNodes[0].src.toString();
}

function on(elem) {
    event.stopPropagation();
}

function off(elem) {
    document.getElementById("modal").style.display = "none";
}
