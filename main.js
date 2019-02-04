const startGame = () => {
    let lives = 15;   // Пока рандомно показываем эмоджи в цикле, уменьшая жизни

    let delayTime = setInterval(() => {
        let emojiArr = ["🐭", "🐶", "🐱", "🐼", "🐷", "🐵", "🐰"];
        let getRandomEmoji = () =>
            emojiArr[Math.floor(Math.random() * emojiArr.length)];  //рандомный эмоджи

        let hole;
        let getRandomHole = () =>
            Math.floor(Math.random() * 5); //рандомная нора

        // const holes = ["hole-1","hole-2","hole-3","hole-4","hole-5"];

        hole = document.getElementById("hole-" + getRandomHole());
        hole.setAttribute("class", "hole__animate");
        hole.innerText = getRandomEmoji();
        hole.addEventListener("click", event => console.log("клик на " + hole.innerText));

        setTimeout( () => {
                hole.innerText = "";
                hole.removeEventListener("click", event => console.log("удаление " + hole.innerText) );
        }, 1000);

        lives--;

        console.log("Показываем " + hole.innerText + ". Время:" + Date());

        if (lives === 0) {
            clearInterval(delayTime);
            console.log(Date() + " Конец");
        }

    }, 3000);

    console.log(lives + " повторов")
};


//запуск игры по клику на кнопке "Старт"
document.querySelector('body > div > header > div.buttons-area > button.button-start').addEventListener("click", startGame);


    /* let showEmoji =() => {
         hole = document.getElementById("hole-" + getRandomHole());
         console.log(hole);
         hole.innerText = getRandomEmoji();
         console.log('2' + hole.innerText);
         hole.setAttribute("class", "hole__animate")
         hole.addEventListener("click", event => console.log(hole));
         lives--;
         console.log(Date() + " aaa " );
         if (lives === 0) {
             console.log(Date() + " aaaaaaaaaaaaaaaaa");
         }
     };*/

    //console.log(hole[0].innerText = getRandomEmoji());
    // console.log(hole[0].innerText = "");
    // console.log("Появление " + getRandomEmoji() + " из норы " + holes[getRandomHole()] );
    // console.log(document.getElementsByClassName(holes[getRandomHole()]));
    // const timer = setInterval( () => {
    //     console.log(hole[0].innerText = getRandomEmoji())
    // }, 2000 );

    // setTimeout( () => clearInterval(timer), 10000);