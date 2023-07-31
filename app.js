function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function solve() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


// let calculate= document.getElementsByClassName('operation')
// calculate.addEventListener('click', (e) =>{
//     document.getElementById('result').value += e.val
// })