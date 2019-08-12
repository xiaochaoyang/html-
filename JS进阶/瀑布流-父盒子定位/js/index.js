
window.onload = function () {
    var allBox = document.querySelectorAll('#main .box');
    var main = document.querySelector('#main');
    var boxW = allBox[0].offsetWidth;
    var coun = client().width / boxW;
    console.log(coun);
    var col = parseInt(coun);
    console.log(col);
    main.style.width = col * boxW + 'px';

    var arrH = [];
    each(allBox,function (ele, index) {
        if (index < col) {
            arrH.push(ele.offsetHeight);
        } else {
            var minH = _.min(arrH);
            ele.style.top = minH + 'px';

            var minIndex = arrH.indexOf(minH);
            ele.style.left = minIndex * boxW + 'px';
            ele.style.position = 'absolute';
            arrH[minIndex] = minH + ele.offsetHeight;
        }
    });

}

window.onscroll = function () {
    var loading = checkLoadNewImage();
    if (loading) {
        console.log('需要加载最新的盒子');
    }
};

function checkLoadNewImage() {
    var allBox = document.querySelectorAll('#main .box');
    var lastIndex = allBox.length - 1;
    var lastBox = allBox[lastIndex];
    var isLoading = scroll().top + client().height >= lastBox.offsetHeight / 2 + lastBox.offsetTop;
    return isLoading;
}