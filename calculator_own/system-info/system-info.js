let userAgent = navigator.userAgent;

if (userAgent.indexOf("Chrome") > -1) {
    console.log("Google Chrome");
} else if (userAgent.indexOf("Firefox") > -1) {
    console.log("Mozilla Firefox");
} else if (userAgent.indexOf("Safari") > -1) {
    console.log("Safari");
} else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
    console.log("Internet Explorer");
} else if (userAgent.indexOf("Edge") > -1) {
    console.log("Microsoft Edge");
} else {
    console.log("Jiný prohlížeč");
}


let platform = navigator.platform;
let os = "Unknown OS";

if (platform.indexOf("Win") > -1) {
    os = "Windows";
} else if (platform.indexOf("Mac") > -1) {
    os = "MacOS";
} else if (platform.indexOf("Linux") > -1) {
    os = "Linux";
} else if (platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1) {
    os = "iOS";
} else if (platform.indexOf("Android") > -1) {
    os = "Android";
}

console.log("Operační systém: " + os);

const hasTouchscreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
console.log("Má zařízení dotykovou obrazovku: " + hasTouchscreen);

if (!hasTouchscreen) {
    const key = document.querySelectorAll(".key");
    key.forEach(function(element) {

    });
}

document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});