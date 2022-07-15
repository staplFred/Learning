const fortunes = [
    "The fortune you seek is in another cookie",
    "A closed mouth gathers no feet",
    "A conclusion is simply the place where you got tired of thinking",
    "A cynic is only a frustrated optimist",
    "A foolish man listens to his heart",
    "Happy days are ahead",
];

el = document.getElementById('fortuneDisplay')
console.log('el: ', el)

function displayRandomFortune() {
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    el.innerHTML = fortunes[randomNumber];
}

function displayFortuneNumber2() {
    el.innerHTML = fortunes[1];
};