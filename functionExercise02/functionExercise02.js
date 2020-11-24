//===============Bài 1================
function square(number1) {
    return number1 * number1;
}

function tinhBinhPhuong() {
    let inputNum = +prompt('Nhập vào số cần tính bình phương ');
    alert('Bình phương là: ' + square(inputNum));
}

//===============Bài 2======================
function tinhDienTich(radius) {
    return 3.14 * radius * radius;
}

function tinhChuVi(radius) {
    return 2 * 3.14 * radius;
}

function tinhDt() {
    let radius = +prompt('Nhập vào bán kính hình tròn');
    alert(tinhDienTich(radius));
}

function tinhCv() {
    let radius = +prompt('Nhập vào bán kính hình tròn');
    alert(tinhChuVi(radius));
}

//=====================Bài 3=================
function tinhGiaiThua(number) {
    let giaithua = 1;
    for (i = number; i > 0; i--) {
        giaithua = giaithua * i
    }
    alert(giaithua);
}

//================Bài 4===============
function isNumber(input) {
    if (input % 1 == 0) {
        alert(true);
    } else {
        alert('false');
    }
}

//===================Bài 5================
function findMin(num1, num2, num3) {
    num1 = +prompt('Please insert first number: ')
    num2 = +prompt('Please insert second number: ')
    num3 = +prompt('Please insert third number: ')
    if (num1 <= num2 && num1 <= num3) {
        alert('Gía trị min là: ' + num1);
    } else if (num2 <= num1 && num2 <= num3) {
        alert('Gía trị min là: ' + num2);

    } else {
        alert('Gía trị min là: ' + num3);

    }
}

//=================Bài 6===========================
function isPositiveInteger() {
    let num = +prompt('Please insert a number');
    if (num > 0) {
        alert(num + ' is Positive Integer');
    } else {
        alert(num + ' is not Positive Integer');
    }


}
//=================Bài 7===========================
function changePosition() {
    let  num1 = +prompt('Please insert the first number');
    let num2 = +prompt('Please insert the first number');
    let numTempt = num1;
    num1=num2;
    num2=numTempt;
    alert('the first number after change is: '+num1);
    alert('the second number after change is: '+num2);
}
//=================Bài 8===========================
function arrReverse() {
    let arr = new Array();
    for (i=0;i<5;i++) {
        arr[i] = +prompt('Nhập vào phần tử trong mảng');
    }
    let newArr=new Array();
    for (i=0;i<arr.length;i++) {
        newArr[i] = arr[arr.length-1-i];
    }
    alert(newArr);
}
//=================Bài 9===========================
function checkCharacter () {
    let inputString = prompt('Please insert your string');
    let character = prompt('Please insert your character');
    for (i in inputString) {
        if (character==inputString[i]) {
            return true;
        }
    }
}
function displayResult() {
    if (checkCharacter()) {
        alert('your inserted character is in the string');
    }
    else {
        alert('your inserted character is not in the string');

    }
}