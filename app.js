let button = document.getElementById("theboxes");
button.addEventListener('click', myfunction);

var oldvalue = 0;
var i = 1;

function myfunction() {
    let n = document.getElementById("number").value;
    n = parseInt(oldvalue) + parseInt(n);
    let color = document.getElementById('color').value;

    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('mydiv');
        box.style.backgroundColor = color;
        document.getElementById("box").appendChild(box);
        box.innerHTML = i;
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldvalue);
    }
}