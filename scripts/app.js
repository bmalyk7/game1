// //  Игра в которой нужно првально нужно ответить на заданый вопрос, который связан с математическими знаниями.
// // участвует 1 игрок
// // Задаеться вопрос с таблицы умножения
// // При правильном ответе записываеться один бал 
// при неправильном ответе записываеться ошибка, максимум можно иметь 3 ошибки
// цель набрать как можно больше баллов из 10
const

    getRandomInt = function () {
        return Math.floor(Math.random() * (9 - 1)) + 1;
    },

    db = {
    correct:0,
    inCorrect:0,

        quest: () => {
            for (let i = 0; i <= 9; i++) {
                let a = getRandomInt();
                let b = getRandomInt();
                let q = +prompt("Сколько будет" + a + "*" + b, "");
                if(db.inCorrect >= 3){
                    break;
                }
                if (q == a * b) {
                   db.correct++;
                } else {
                    db.inCorrect++;
                }

            }
        }
    };

db.quest();