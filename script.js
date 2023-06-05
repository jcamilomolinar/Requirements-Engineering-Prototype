function putOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "block";
}

function quitOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "none";
}

function openWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "block";
    putOverlay();
}

function closeWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "none";
    quitOverlay();
}