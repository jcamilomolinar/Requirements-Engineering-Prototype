function putOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "block";
}

function quitOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "none";
}


function openStealsBall() {
    let window = document.getElementById("openStealsBall");
    window.style.display = "block";
    putOverlay();
}

function closeStealsBall() {
    let window = document.getElementById("openStealsBall");
    window.style.display = "none";
    quitOverlay();
}
