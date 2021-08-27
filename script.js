
do {
    var num = +prompt('Введите число')
}while(isNaN(num) || num == 0)

do {
    var power = +prompt('Введите степень')
}while(isNaN(num) || num == 0)

let res = 1;

for(let i = 0; i < power; i++) {
    res = res * num
}

alert(res)

do {
    var num = +prompt('Введите количество ступенек')
}while(isNaN(num) || num <= 0)

do {
    var sym = prompt('Введите символ отступов')
}while(sym == '')

do {
    var finalSym = prompt('Введите конечный символ')
}while(finalSym == '')

for(let i = 0; i < num; i++) {
    finalSym = i == 0 ? finalSym : sym + finalSym;
    console.log(finalSym);
}