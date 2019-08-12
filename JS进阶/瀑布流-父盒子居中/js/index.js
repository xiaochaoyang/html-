
window.onload = function () {
    var allBox = document.querySelectorAll('#main .box');
    var main = document.querySelector('#main');
    var boxW = allBox[0].offsetWidth;
    var coun = client().width / boxW;
    console.log(coun);
    var col = parseInt(coun);
    console.log(col);
    main.style.width = col * boxW + 'px';
}