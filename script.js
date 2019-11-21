const quoteValue1 = document.querySelector(".quote1");
const quoteValue2 = document.querySelector(".quote2");
const quoteValue3 = document.querySelector(".quote3");
const quoteValue4 = document.querySelector(".quote4");
const quoteValue5 = document.querySelector(".quote5");
let newArray = [];


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

        newArray.sort();                                 
        for (let i = 0; i < newArray.length; i++) {
            //console.log(newArray[i]);
            //newArray[i]=string
            //console.log(newArray[0]);
            quoteValue1.innerHTML = newArray[0];
            quoteValue2.innerHTML = newArray[1];
            quoteValue3.innerHTML = newArray[2];
            quoteValue4.innerHTML = newArray[3];
            quoteValue5.innerHTML = newArray[4];
        }//end of for loop
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
        let one = firstQuote.replace('Capitalism','__________');
        let two = secondQuote.replace('alcohols', '________');
        let three = thirdQuote.replace('Creativity', '__________');
        let four = fourthQuote.replace('Fishing', '_______');
        let five = fifthQuote.replace('Turkey', '______');
        console.log(one);
        console.log(two);
        console.log(three);
        console.log(four);
        console.log(five);

};//end of quotegenerator function

quoteGenerator();