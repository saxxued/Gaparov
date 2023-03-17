let input = document.querySelector(".field__input");
let btn = document.querySelector(".field__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);

btn.onclick = function (Event) {

Event.preventDefault();

console.log(input.value)
userNum = input.value;
if (userNum > randNum) {
check.textContent = "Пока что не угадали...";
help.textContent = "Многовато будет";
item++;
count.textContent = item;
} else if (userNum < randNum) {
    check.textContent = "Пока что не угадали...";
help.textContent = "Маловато будет";
item++;
count.textContent = item;
} else {
    check.textContent = "Поздравляем! Вы угадали.";
    help.textContent = "B самый раз";
    item++;
    count.textContent = item;
}

};
