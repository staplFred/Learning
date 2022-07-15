function myFunction(){
    function randomFortune(fort){
    const fortuneRandom = Math.floor(Math.random()*fort.length);
    const cookie = fort[fortuneRandom];

    return cookie;
}
const fortune =[
    "The fortune you seek is in another cookie",
    "Aclosed mouth gathers no feet",
    "A conclusion is simply the place where you got tired of thinking",
    "A cynic is only a frustrated optimist",
    "A foolish man listens to his heart",
    "Happy days are ahead",
];
const results = randomFortune(fortune);

    document.getElementById('demo').innerHTML = results;
};
