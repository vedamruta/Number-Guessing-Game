// Step 1 : 
// Generate a random number between 1 and 100.
let r_no = Math.floor(Math.random()*100) + 1;
// 'random()' method generates a random decimal between 0(inclusive) and 1(exclusive).
// 1 is excluded. 
// Step 2 : 
// Record the turn number the player is on.
const turn_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let notification = document.getElementsByClassName('notification'); 
let near_far = document.getElementsByClassName('near-far');

document.getElementById('restart').ariaDisabled = true;

for (let i=0; i<turn_array.length; i++) {
    const guessed_no = document.getElementById('txt_number');
    let previousguesses = document.querySelector('span');
    previousguesses.innerText += ` ${r_no}`;
    if (guessed_no === r_no) {
        notification.innerText = "Congratulations! You got it right!";
        document.getElementById('txt_number').ariaDisabled = true;
        document.getElementById('submit_btn').ariaDisabled = true;
        document.getElementById('restart').ariaDisabled = false;
        break;
    }
    else if (guessed_no > r_no){
        notification.innerText = "Wrong!";
        near_far.innerText = `Last guess was too high!`;
    }
    else if (guessed_no < r_no) {
        notification.innerText = "Wrong!";
        near_far.innerText = `Last guess was too low!`;
    }

}
notification.innerText = "!!!GAME OVER!!!";
document.getElementById('restart').ariaDisabled = false;