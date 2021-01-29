
function myClick(elem, src) {
    event.preventDefault();
    console.log("HI");
    document.getElementById("modal").style.display = "block";
    document.getElementById(src).src = src == "videoSrc" ? elem.childNodes[1].src.toString() : elem.childNodes[0].src.toString();
}

function on(elem) {
    event.stopPropagation();
}

function off(elem) {
    document.getElementById("modal").style.display = "none";
}

function goTop(elem) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () {
    if(document.body.scrollTop > 0.25* window.innerHeight || document.documentElement.scrollTop > 0.25*window.innerHeight) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

//using regex for email validatation purpose
function validate(elem) {
    document.getElementById("success").style.display = "none";
    document.getElementById("failure").style.display = "none";

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("failure").style.display = "block";
    }
}
