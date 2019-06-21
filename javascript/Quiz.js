// Maintain results of the order. 
let results = {
    lana: 0,
    mondeo: 0,
    bmw: 0,
    ferarri: 0
}

let images = {
    lana: 'https://media.giphy.com/media/KU6zOC79L9XZ6/giphy.gif',
    mondeo: 'https://media.giphy.com/media/Ulx1PqJARunv2/giphy.gif',
    bmw: 'https://media.giphy.com/media/14eo2RwJ0E7k0E/giphy.gif',
    ferarri: 'https://media.giphy.com/media/fHgvGgFp7sc4E/giphy.gif'
};

// Question set that will be used.
    let questions = [
        {
            question: "What is your prefered colour?",
            answers: [
                {value: "lana", label: "Yellow"},
                {value: "mondeo", label: "Blue"},
                {value: "bmw", label: "Black"},
                {value: "ferarri", label: "Red"}
            ]
            
        },
        {
            question: "What is your prefered holday?",
            answers: [
                {value: "lana", "label": "Camping"},
                {value: "mondeo", "label": "City Trip"},
                {value: "bmw", label: "Beach"},
                {value: "ferarri", label: "Skiing"}
            ]  
        },
        {
            question: "Which was most recently visited?",
            answers: [
                {value: "lana", label: "Asda"},
                {value: "mondeo", label: "Sainsbury's"},
                {value: "bmw", label: "Tesco"},
                {value: "ferarri", label: "Waitrose"}
            ]
        },
        {
            question: "Which do you prefer?",
            answers: [
                {value: "lana", label: "Gaming"},
                {value: "mondeo", label: "Cinema"},
                {value: "bmw", label: "Extreme Sports"},
                {value: "ferarri", label: "Library"}
            ]
        }
    ]
// Keeps track of question counter
let step = 0;

// Template of a question.
/*
{
    question: "What is ....?",
    answers: [
        {value: "lana", label: "Yellow"},
        {value: "mondeo", label: "Blue"},
        {value: "bmw", label: "Black"},
        {value: "ferarri", label: "Red"}
    ]
},
*/


// Shuffle the order of the array and return.
const shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// update the results, 
// taking the value of the radio button and incrementing the corresponding car.
const updateResults = (value) =>{
    results[value] = results[value] +1; 
}

// update the dispaly, 
// set up question and answer for current step
const updateDisplay = () => {
    createQuestion();
    createAnswers();
}

const getProgress = () => {
    let now = 0;
    now = (step*100)/questions.length ;

    return "<div class='progress'>" +
        "<div class='progress-bar' role='progressbar' style='width:" + now + "%' aria-valuenow='"+now+"' aria-valuemin='0' aria-valuemax='100'></div>" 
    + "</div>"
}

const setProgressBar = () => {
    document.getElementById("progression").innerHTML = getProgress();
}

//creaete question element
const createQuestion = () => {
    document.getElementById("question-name").innerHTML=questions[step].question;
}

const createAnswers = () => {

    let answers = questions[step].answers
    let response = ""
    for(let i=0; i<answers.length; ++i){
     response = response +"<label class='element-animation1 btn btn-lg btn-primary btn-block'><span class='btn-label'><i class='glyphicon glyphicon-chevron-right'></i></span> <input id='input-"+i+"' type='radio' name='q_answer' value='"+answers[i].value+"'>"+answers[i].label+"</label>"
    }
    document.getElementById("answers").innerHTML = response
}

// display the final results, by finding the max
const displayResults = () => {
    let result = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    let image = images[result]
    document.getElementById('question-name').innerHTML = "Looks like the car you will drive is a "+result+ "!"
    document.getElementById('answers').innerHTML = "<div class='row justify-content-center'><img src='"+image+"' style='width:100%; max-height:422px;'></div>"
}
// Update the Results when the radio button is clicked
$("#answers").on("change","input",function(){         // $("input[name='q_answer']").change(function(){
    let value = $(this).val();
    
    step++;
    console.log("on change....");
    updateResults(value);
    setProgressBar();
    if(step == questions.length){
        displayResults();
    }else{
        updateDisplay();
    }
});

// on load - shuffle the questions and display first question. 
$( document ).ready(function() {
    questions = shuffleArray(questions);
    updateDisplay();
});
