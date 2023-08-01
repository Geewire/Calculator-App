function display(value) {
    document.getElementById("result").value += value;

}

function clearScreen() {
    document.getElementById("result").value = "";
}

function solve() {
    var a = document.getElementById("result").value;
    var b= eval(a);
    document.getElementById("result").value = b;
}


// let calculate= document.getElementsByClassName('operation')
// calculate.addEventListener('click', (e) =>{
//     document.getElementById('result').value += e.val
// })