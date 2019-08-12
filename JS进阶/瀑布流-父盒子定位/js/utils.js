
function $(id) {
    return document.getElementById(id);
}

function getElementsClassName(obj, className) {
    if (obj.getElementsByClassName) {
        return obj.getElementsByClassName(className);
    } else {
        var list = obj.getElementsByTagName('*');
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            var ele = list[i];
            if (ele.className === className) {
                arr.push(ele);
            }
        }
        return arr;
    }
}

function each(obj, callback) {
    for (var i = 0; i < obj.length; i++) {
        callback(obj[i],i);
    }
}

function scroll() {
    if (window.pageXOffset || window.pageYOffset){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        };
    } else if (document.compatMode === 'CSS1Compat') {
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    } else {
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}

function client() {
    if (window.innerWidth || window.innerHeight){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    } else if (document.compatMode === 'CSS1Compat'){
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    } else {
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}