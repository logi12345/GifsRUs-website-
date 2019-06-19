
let myGifs = [
    "https://media.giphy.com/media/xZqycRHIQkKNa/giphy.gif",
    "https://media.giphy.com/media/dJtoGmnupA00QaJitW/giphy.gif",
    "https://media.giphy.com/media/3E2Qd5tJ8Nke7E25GE/giphy.gif",
    "https://media.giphy.com/media/lwbovkqQ5af12maG0A/giphy.gif",
    "https://media.giphy.com/media/1Bcf6V09JinAs7Xou3/giphy.gif",
]


let first =0;
let second =1;
let third = 2;

const previousDecrement = () =>{
    first = (first+1)%myGifs.length
    second = (second+1)%myGifs.length
    third = (third+1)%myGifs.length
    displayGif(first,second,third)
}

const nextIncrement = () => {
    first = ((first-1) % myGifs.length + myGifs.length) % myGifs.length
    second = ((second-1) % myGifs.length + myGifs.length) % myGifs.length
    third = ((third-1) % myGifs.length + myGifs.length) % myGifs.length
    displayGif(first,second,third)
}

const displayGif = (first,second, third) =>{
    document.getElementById('slot1').innerHTML ="<img src='"+myGifs[first]+"'>"
    document.getElementById('slot2').innerHTML ="<img src='"+myGifs[second]+"'>"
    document.getElementById('slot3').innerHTML ="<img src='"+myGifs[third]+"'>"
}


