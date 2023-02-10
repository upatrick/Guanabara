function multiplicar() {
    var num = document.getElementById("nmb").value;
    num = parseInt(num);
    x1 = num * 1;
    x2 = num * 2;
    x3 = num * 3;
    x4 = num * 4;
    x5 = num * 5;
    x6 = num * 6;
    x7 = num * 7;
    x8 = num * 8;
    x9 = num * 9;
    x10 = num * 10;

    res.innerHTML = `${num} x1 = ${x1} <br>
    ${num} x 2 = ${x2} <br>
    ${num} x 3 = ${x3} <br>
    ${num} x 4 = ${x4} <br>
    ${num} x 5 = ${x5} <br>
    ${num} x 6 = ${x6} <br>
    ${num} x 7 = ${x7} <br>
    ${num} x 8 = ${x8} <br>
    ${num} x 9 = ${x9} <br>
    ${num} x 10 = ${x10}
    `;
}
