notas = [1, 2, 4, 7, 2];
const maxValue = notas.reduce(function (prev, current) {
    return prev > current ? prev : current;
});
document.write(maxValue);
