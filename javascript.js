// 1. Tạo Array với các số bất kỳ, tính tổng các số trong array, in ra màn hình html


// const quartes = document.querySelector('.result');
// let arr = [1, 4, 6, 7, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//     quartes.innerHTML = sum;
// }

//3.Tạo 1 button với sự kiện onclick, khi user bấm vào thì ẩn hiện text bất kỳ, thay đổi background của màn hình.
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');
 
// Thiết lập click cho button 1
button1.onclick = function () {
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
        div.style.background = "blue";
    }
};
 
