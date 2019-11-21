//main variables
const quoteValue1 = document.querySelector(".quote1");
const quoteValue2 = document.querySelector(".quote2");
const quoteValue3 = document.querySelector(".quote3");
const quoteValue4 = document.querySelector(".quote4");
const quoteValue5 = document.querySelector(".quote5");
let newArray = [];
let imageSelector = document.querySelector(".pyramid");
let messageSelector = document.querySelector("#message");
let src1 = "/images/ron-swanson-bottom-arrow.png";
let src2 = "/images/ron-swanson-middle-arrow.png";
let src3 = "/images/ron-swanson-top-arrow.png";


async function quoteGenerator(){
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes/200");
    const data = await response.json();
    //console.log(typeof data);
    //console.log(data);

        //iterates over all of the quotes looking for 5 specific quotes and adding these to an empty array
        data.forEach(function(quote) {
            if (quote === "Clear alcohols are for rich women on diets."){
                //console.log(quote);
                newArray.unshift(quote);
            } else if(quote === "Fishing relaxes me. It's like yoga, except I still get to kill something.") {
                //console.log(quote);
                newArray.unshift(quote);
            } else if(quote === "Turkey can never beat cow."){
                //console.log(quote);
                newArray.unshift(quote);
            } else if(quote === "Capitalism: God's way of determining who is smart and who is poor."){
                //console.log(quote);
                newArray.unshift(quote);
            } else if(quote === "Creativity is for people with glasses who like to lie."){
                //console.log(quote);
                newArray.unshift(quote);
            }
        });//end of foreach
        //sorts the array of quotes in a fixed and alphabetical way
        newArray.sort();                                 
        for (let i = 0; i < newArray.length; i++) {
            //console.log(newArray[i]);
            //newArray[i]=string
            //console.log(newArray[0]);
        }//end of for loop
        //assigning quotes to variables
        let firstQuote = newArray[0];
        let secondQuote = newArray[1];
        let thirdQuote = newArray[2];
        let fourthQuote = newArray[3];
        let fifthQuote = newArray[4];
/*
        console.log(firstQuote);
        console.log(secondQuote);
        console.log(thirdQuote);
        console.log(fourthQuote);
        console.log(fifthQuote);
*/
        //replacing keyword by blank space
        let one = firstQuote.replace('Capitalism','__________ ');
        let two = secondQuote.replace('alcohols', '________');
        let three = thirdQuote.replace('Creativity', '__________');
        let four = fourthQuote.replace('Fishing', '_______');
        let five = fifthQuote.replace('Turkey', '______');
        console.log(one);
        console.log(two);
        console.log(three);
        console.log(four);
        console.log(five);
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
function imagePopUp(){
    let counter = 0;

    if(inputValue1.value === 'Capitalism' && inputValue1.value !== null){
        counter++};
    if (inputValue2.value === 'alcohols' && inputValue2.value !== null){
        counter++};
    if (inputValue3.value === 'Creativity' && inputValue3.value !== null){
        counter++}; 
    if (inputValue4.value === 'Fishing' && inputValue4.value !== null){
        counter++};
    if (inputValue5.value === 'Turkey' && inputValue5.value !== null){
        counter++};
    console.log(counter);
    //displaying different image for each score
    if(counter >= 4){
        console.log("winner!")
        imageSelector.src = src3;
    };
    if(counter === 3){ 
        console.log("average!");
        imageSelector.src = src2;
    };
    if(counter <= 2){
        console.log('loser!');
        imageSelector.src = src1;

    }

    
};//end imagePopUp function

//linking everything to submit button
document.getElementById("submit").addEventListener("click", function(){
    imagePopUp();
});