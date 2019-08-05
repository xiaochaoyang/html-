
function $(id) {
    return document.getElementById(id);
}

function getElementsClassName(obj, className) {
    console.log(1111);
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