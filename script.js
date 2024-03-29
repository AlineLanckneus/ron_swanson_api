//main variables
const quoteValue1 = document.querySelector(".quote1");
const quoteValue2 = document.querySelector(".quote2");
const quoteValue3 = document.querySelector(".quote3");
const quoteValue4 = document.querySelector(".quote4");
const quoteValue5 = document.querySelector(".quote5");
let newArray = [];
const r = document.querySelector("#random");
//const rEl = document.querySelector("#random2");

const src1 = "/images/ron-swanson-bottom-arrow.png";
const src2 = "/images/ron-swanson-middle-arrow.png";
const src3 = "/images/ron-swanson-top-arrow.png";

function refreshPage(){
    window.location.reload();
};

async function quoteGenerator(){
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes/200");
    const data = await response.json();

        //iterates over all of the quotes looking for 5 specific quotes and adding these to an empty array
        data.forEach(function(quote) {
            if (quote === "Clear alcohols are for rich women on diets."){
                
                newArray.unshift(quote);
            } else if(quote === "Fishing relaxes me. It's like yoga, except I still get to kill something.") {
                
                newArray.unshift(quote);
            } else if(quote === "Turkey can never beat cow."){
                
                newArray.unshift(quote);
            } else if(quote === "Capitalism: God's way of determining who is smart and who is poor."){
                
                newArray.unshift(quote);
            } else if(quote === "Creativity is for people with glasses who like to lie."){

                newArray.unshift(quote);
            }
        });//end of foreach
        //sorts the array of quotes in a fixed and alphabetical way
        newArray.sort();                                 
        for (let i = 0; i < newArray.length; i++) {
        }//end of for loop
        //assigning quotes to variables
        let firstQuote = newArray[0];
        let secondQuote = newArray[1];
        let thirdQuote = newArray[2];
        let fourthQuote = newArray[3];
        let fifthQuote = newArray[4];
        //replacing keyword by blank space
        let one = firstQuote.replace('Capitalism','__________ ');
        let two = secondQuote.replace('alcohols', '________');
        let three = thirdQuote.replace('Creativity', '__________');
        let four = fourthQuote.replace('Fishing', '_______');
        let five = fifthQuote.replace('Turkey', '______');
        //assigning each corresponding html element with a quote
        quoteValue1.innerHTML = one;
        quoteValue2.innerHTML = two;
        quoteValue3.innerHTML = three;
        quoteValue4.innerHTML = four;
        quoteValue5.innerHTML = five;

};//end of quotegenerator function

quoteGenerator();

//declaring variables equal to different inputs
let inputValue1 = document.getElementById("input1");
let inputValue2 = document.getElementById("input2");
let inputValue3 = document.getElementById("input3");
let inputValue4 = document.getElementById("input4");
let inputValue5 = document.getElementById("input5");


//checks if answers are correct and adds to score
//different image will pop up with each score
const highScore = "Well done! You correctly guessed most of the answers! You've earned your place at the top of the Pyramid of Greatness!";
const avgScore = "Not bad! You guessed three out of five. Your place in the Pyramid of Greatness is subsequently somewhere in the middle. Hit the try again button to do better!";
const lowScore = "Auwtsch, you've barely earned your place in the Pyramid of Greatness.. Keep dangling at the bottom or be a true Swanson and hit the try again button to do better!";

//function that will run after pressing submit button
function imagePopUp(){
    //selecting div with id=message, creating div inside and giving it class of 'row'
    const messageEl = document.querySelector("#message");
    messageEl.className = 'container-fluid';
    let msg = document.createElement("div");
    msg.className = 'row';
    messageEl.appendChild(msg);

    //creating img element and placing it inside imagePop div
    const popUpContainer = document.querySelector("#imagePop");
    popUpContainer.className = 'container-fluid';
    const img = document.createElement("img");
    img.className = 'pyramid';
    popUpContainer.appendChild(img);
    //selecting div inside imagePop and creating try again-btn inside it
    const rowBtn2 = document.querySelector(".row--btn2");
    let tryButton = document.createElement("button");
    tryButton.className = "btn btn-large";
    tryButton.setAttribute("id", "tryAgainBtn");
    tryButton.innerHTML = "TRY AGAIN";
    popUpContainer.append(rowBtn2);
    rowBtn2.appendChild(tryButton);

    //checking answers
    let counter = 0;

    if(inputValue1.value === 'Capitalism' || inputValue1.value === 'capitalism' && inputValue1.value !== null){
        counter++; 
        //inputValue1.style.color = 'green';
        inputValue1.className += ' green';
        inputValue1.value += '  => CORRECT!';
    } else {
        //inputValue1.style.color = 'red';
        inputValue1.className += ' red';
        inputValue1.value += '  => FALSE!';
    };

    if (inputValue2.value === 'alcohols' && inputValue2.value !== null){
        counter++;
        inputValue2.className += ' green';
        inputValue2.value += '  => CORRECT!';
    } else{
        inputValue2.className += ' red';
        inputValue2.value += '  => FALSE!';
    };

    if (inputValue3.value === 'Creativity' || inputValue3.value === 'creativity'&& inputValue3.value !== null){
        counter++;
        inputValue3.className += ' green';
        inputValue3.value += '  => CORRECT!';
    } else {
        inputValue3.className += ' red';
        inputValue3.value += '  => FALSE!';
    }; 

    if (inputValue4.value === 'Fishing' || inputValue4.value === 'fishing'&& inputValue4.value !== null){
        counter++;
        inputValue4.className += ' green';
        inputValue4.value += '  => CORRECT!';
    } else{
        inputValue4.className += ' red';
        inputValue4.value += '  => FALSE!';
    };

    if (inputValue5.value === 'Turkey' || inputValue5.value === 'turkey'&& inputValue5.value !== null){
        counter++;
        inputValue5.className += ' green';
        inputValue5.value += '  => CORRECT!';
    } else{
        inputValue5.className += ' red';
        inputValue5.value += '  => FALSE!';
    };
    console.log(counter);

    //displaying different image for each score
    if(counter >= 4){
        console.log("winner!")
        msg.innerHTML = highScore;
        img.src = src3;
    };
    if(counter === 3){ 
        console.log("average!");
        msg.innerHTML = avgScore;
        img.src = src2;
    };
    if(counter <= 2){
        console.log('loser!');
        msg.innerHTML = lowScore;
        img.src = src1;
    };
    
    //clicking try again button reloads the webpage
    tryButton.addEventListener("click", function(){
        refreshPage();
    });

};//end imagePopUp function

//linking everything to submit button
document.getElementById("submit").addEventListener("click", function(){
    imagePopUp();
}, {once : true});//modern js way to avoid firing again after first click


async function rquoteGenerator(){
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes/200");
    const data = await response.json();

        let rEl = document.querySelector("#random2");
        for (let i = 0; i < data.length; i++) {
        rEl.innerHTML = '"' + data[i] + '"';};
    };
    
    r.addEventListener("click", function(){
        rquoteGenerator();
    });
    
