
function setDefaultMode() {
    document.getElementById('pageBody').style.backgroundColor = "#f4f4f4";
    document.getElementById('pageBody').style.color = "#333";
    document.getElementById('currentMode').innerHTML = "Default";
}

function setDarkMode() {
    document.getElementById('pageBody').style.backgroundColor = "#333";
    document.getElementById('pageBody').style.color = "#fff";
    document.getElementById('currentMode').innerHTML = "Dark";
}

function setLightMode() {
    document.getElementById('pageBody').style.backgroundColor = "#ffffff";
    document.getElementById('pageBody').style.color = "#000";
    document.getElementById('currentMode').innerHTML = "Light";
}

window.onload = setDefaultMode;
