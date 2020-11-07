
var next = document.getElementById('next');
var back = document.getElementById('back');
console.log(next, back);

if (next) {
    next.onclick = function () { 
        window.history.forward();
     }    
} else { 
    back.onclick = function () { 
        window.history.back();
     }    
}

// // 在第二頁寫一個返回上一頁的功能
// document.getElementById('back').onclick = function () {
//     window.history.back();
// };

// document.getElementById('next').onclick = function () {
//     window.history.forward();
// };

