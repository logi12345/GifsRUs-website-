
let myGifs = []

let noImages = 5;
api =() =>{
const request = new Request('http://api.giphy.com/v1/gifs/trending?api_key=JqYOPDtN0pje41qNgnN1xAgrjkRC5X3t&limit=5');
fetch(request)
  .then(response => {
    if (response.status === 200) {
        const x =response.json();
      return x;
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(function(response) {
      for(let i=0; i<noImages; ++i){      
        myGifs.push("https://media.giphy.com/media/"+response.data[i].id+"/giphy.gif");
      }
      previousDecrement();
    
  }).catch(error => {
    console.error(error);
  });
}

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


