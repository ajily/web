let before_load_time = new Date().getTime();
window.onload = function () {
    document.getElementById("load_time").innerHTML =
        "Page load time is <b>" + (new Date().getTime() - before_load_time) / 1000 + "</b> seconds";
}

document.addEventListener('DOMContentLoaded', function () {
    const mask = document.querySelector('#mask');
    btn.style.display = 'none';
    setTimeout(function () {
        mask.style.display = "none";
        btn.style.display = 'block';
    }, 1500);
})
