//========Bài 1================================
function alertMessage() {
    alert('Xin chào')
}

//=========Bài 2================================
function returnResult2(input) {
    input = +prompt('Nhập vào một số: ');
    let output = input + 1;
    return output
}

function documentWrite() {
    document.getElementById('output2').innerHTML = 'Số cần tìm là: ' + returnResult2();
}

//===================Bài 3=====================
function compareAndSummarize() {
    let num1 = +prompt('Please input the first number: ');
    let num2 = +prompt('Please input the second number: ');
    if (num1 > num2) {
        alert('the first number cannot bigger than second number')
    } else {
        let sum = num1 + num2;
        return sum;
    }
}

//===================Bài 4=====================
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

function testAlert() {
    result = 0;
    alert(result);
    result = addNumbers();
    alert(result);
}

//===================Bài 5=====================
function getStarName () {
    let starName=document.getElementById('input05').value;
    return starName
}
function findStarName() {
    let star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', ' Dubhe', 'Regulus'];
    let starGroup = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let starName = getStarName();
    let haveStar
    for (i=0; i<star.length;i++) {
        if (starName==star[i]) {
            alert('Your star group is: '+starGroup[i])
            haveStar=true;
        }
    }
    if (haveStar!=true) {
        alert('Your fucking star is not match any our star !!!');
    }

}