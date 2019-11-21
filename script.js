const quoteValue = document.body.querySelector(".quote");

async function quoteGenerator(){
    const response = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const data = await response.json();
    
    console.log(data);
    quoteValue.innerHTML = data;
}

quoteGenerator();