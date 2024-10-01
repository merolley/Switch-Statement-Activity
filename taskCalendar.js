/*references:
https://www.enablegeek.com/tutorial/implementing-readline-for-user-input-in-node-js/
https://surajsharma.net/blog/javascript-multiple-conditions-switch-case
https://www.w3schools.com/js/js_switch.asp
*/

//creating task calendar
//implementing the readline for user's input in node js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//user input
readline.question("Enter the day of the week(eg., Monday, Tuesday): ", day => {
    day = day;
    switch(day) {
        case "Monday": //the day of the week
            console.log("Your task for Monday is to finish your assignments"); //user's task for this particular day
            break;
        case "Tuesday":
            console.log("Your task for Tuesday is to review for a quiz");
            break;
        case "Wednesday":
            console.log("Your task for Wednesday is to review for recitation");
            break;
        case "Thursday":
            console.log("Your task for Thursday is to make a presentation for your report ");
            break;
        case "Friday":
            console.log("Your task for Friday is to attend a seminar");
            break;
        case "Saturday":
            console.log("Your task for Saturday is to relax");
            break;
        case "Sunday":
            console.log("Your task for Saturday is to advance reading your lesson");
            break;
        default:
            console.log("INVALID INPUT. PLEASE ENTER THE DAY OF THE WEEK '>'"); //print for any invalid input
}           
        readline.close();
});