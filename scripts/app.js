let list = {};


let x = prompt("Впишите ответ", "");

function start() {
    for (let i = 1; i <= 2; i++) {
        if (x === "show") {
            if (IsEmpty(list)) {
                alert("Нет данных");
            } else {
                console.log(list);
            }
            console.log(list);
        }
        if (x === "add") {
            let ert = prompt("Дай новое свойство", ""),
                da = +prompt("Дай значение свойству", "");
            list[ert] = da;
        }
        if (x === "del") {

        }

    }

}

function IsEmpty(list) {
    for (let key in list) {
        return false;
    }
    return true;
}

start();
IsEmpty();