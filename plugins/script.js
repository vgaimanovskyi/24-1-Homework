/*
// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const num1 = +prompt("Enter number1"),
    num2 = +prompt("Enter number2");
let sum = 0, min, max;
if (num1 < num2) {
    min = num1;
    max = num2;
} else {
    min = num2;
    max = num1;
}
while (min <= max) {
    sum += min;
    min++;
}
console.log(sum);

// 2. Запросить 2 числа и найти только наибольший общий делитель.
// !!! copy-paste !!!
let a = +prompt("Enter number1"),
    b = +prompt("Enter number2");
let result;
if ((a %= b) === 0) {
    result = Math.abs(b);
} else if ((b %= a) === 0) {
    result = Math.abs(a);
}
console.log(result);

// 3. Запросить у пользователя число и вывести все делители этого числа.
const number = +prompt("Enter number");
let result = 1;
for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
        result = i;
    }
    console.log(i);
}

// 4. Определить количество цифр в введенном числе.
let number = +prompt("Enter number");
for (i = 0; number > 1; i++) {
    number /= 10;
}
console.log(i);

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let pos = 0,
    neg = 0,
    zero = 0;
for (let i = 0; i < 10; i++) {
    let num = +prompt("Enter number");
    if (num > 0) {
        pos += 1;
    } else if (num < 0) {
        neg += 1;
    } else {
        zero += 1;
    }
}
console.log(`положительных = ${pos}, отрицательных = ${neg}, нулей = ${zero}`);

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
do {
    const num1 = +prompt("Enter number1"),
        num2 = +prompt("Enter number2"),
        action = prompt("Enter + or - or * or / or %");
    console.log(eval(num1 + action + num2));
} while (prompt("Enother one yes / no?") == "yes");

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
const num = +prompt("Enter number"),
    pos = +prompt("Enter position");
if (pos == 0) {
    console.log(num);
} if (pos < 0) {
    console.error("pos < 0 !!!");
} else {
    const str = 10 ** (+(String(num).length) - pos);
    const start = String(Math.trunc(num / str));
    const end = String(num % str);
    console.log(Number(end + start));
}

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
for (let i = 0; i <= 6; i++) {
    do {
        console.log(week[i]);
    } while (alert("next day?") == true);
}

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let result = 1;
for (let number = 2; number <= 9; number++) {
    for (let i = 1; i <= 10; i++) {
        result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
*/
// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла
// делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или==N?».
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
/*
const max = 100,
    min = 1;
let N = max / 2;
do {
    let answer = prompt(`Ваше число >, < или = ${N}?`);
    if (answer == ">") {
        N = (N + 1) / 2;
    } else if (answer == "<") {
        N = (N - 1) / 2;
    }
} while (answer != "=");
console.log(N);
*/