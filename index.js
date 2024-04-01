// Create a function that returns thank you message
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
    
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
// create a function for counts down from 10 to 0 

function countDown(number){
    while (number >=0) {
        console.log(number);
        number--;
    }
}
