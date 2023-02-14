const txtno1 = document.getElementById('txt_number');
const button = document.getElementById('submit_btn');
const output = document.getElementById('previous_guess');
const notification = document.getElementById('notification');
const near_far = document.getElementById('near-far');
const restart = document.getElementById('restart');

function submit_click() {
  output.innerHTML += " "+txtno1.value;
}
button.addEventListener('click', submit_click);

// We generate a random number from 1 to 100
const random = Math.floor(Math.random()*100) + 1;

// We assign a counter since there only 10 attempts allowed in total
let count = 0;

function guess_game() {
//LOGIC Begins
// Disable visibility of 'Start new game' button
  restart.disabled = true;
  count++;
  if(count<=10) {
    if(txtno1.value==random) {
      // if(txtno1===random) here, `===` doesn't work because here input is a number and no strict comparison is required.
      notification.innerHTML = "Congratulations!! Correct.";
      button.disabled = true;
      txtno1.disabled = true;
      restart.disabled = false;
      near_far.innerHTML = "";
    }   
    else if(txtno1.value<random) {
      notification.innerHTML = "Incorrect !!";
      near_far.innerHTML = "Very Low.";
    }
    else if (txtno1.value>random) {
      notification.innerHTML = "Incorrect !!";
      near_far.innerHTML = "Very High.";
    }
    if(count===10 && txtno1.value!==random) {
      notification.innerHTML = "Incorrect !!";
      near_far.innerHTML = "Game Over!";
      restart.disabled = false;
      button.disabled = true;
      txtno1.disabled = true;
    }
  }
}
button.addEventListener('click', guess_game);

function restart_click() {
  txtno1.disabled = false;
  txtno1.value = "";
  button.disabled = false;
  count = 0;
  output.innerHTML = "";
}
restart.addEventListener('click', restart_click);