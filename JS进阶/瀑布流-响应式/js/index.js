
window.onload = function () {
    waterFull();
    window.onscroll = function () {
        var loadind = checkLoadNewImage();
        if (loadind) {
            var data = [
                {src:"images/1.jpg"},
                {src:"images/2.jpg"},
                {src:"images/3.jpg"},
                {src:"images/5.jpg"},
                {src:"images/3.jpg"},
                {src:"images/6.jpg"},
                {src:"images/3.jpg"},
                {src:"images/1.jpg"},
                {src:"images/7.jpg"},
                {src:"images/30.jpg"},
                {src:"images/29.jpg"},
            ];
            _.each(data,function (e) {
                var box = document.createElement('div');
                $('main').appendChild(box);
                box.className = 'box';
                var pic = document.createElement('div');
                box.appendChild(pic);
                pic.className = 'pic';

                var img = document.createElement('img');
                pic.appendChild(img);
                img.src = e.src;
            })
            waterFull();
        }
    }
    // // var timer = null;
    // window.onresize = function () {
    //     // clearInterval(timer);
    //     // timer = setTimeout(function () {
    //     waterFull();
    //     console.log(1);
    //     // },200);
    // }
}



function waterFull() {
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


function checkLoadNewImage() {
    var allBox = document.querySelectorAll('#main .box');
    var lastIndex = allBox.length - 1;
    var lastBox = allBox[lastIndex];
    var isLoading = scroll().top + client().height >= lastBox.offsetHeight / 2 + lastBox.offsetTop;
    return isLoading;
}