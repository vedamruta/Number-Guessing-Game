const txtno1 = document.getElementById('txt_number');
        const button = document.getElementById('submit_btn');
        const output = document.getElementById('previous_guess');

        function funct() {
            output.innerHTML += " "+txtno1.value;
        }
        button.addEventListener('click', funct);

        function guess_game() {
            // We generate a random number from 1 to 100
            const random = Math.floor(Math.random()*100) + 1;

            // We assign a counter since there only 10 attempts allowed in total
            let count = 1;

            const notification = document.getElementById('notification');
            const near_far = document.getElementById('near-far');
            const restart = document.getElementById('restart');

            //LOGIC Begins
            // Disable visibility of 'Start new game' button
            restart.disabled = true;

            while(count<=10) {
                if(txtno1===random) {
                    notification.innerHTML = "Congratulations!! Correct.";
                    button.disabled = true;
                    txtno1.disabled = true;
                    restart.disabled = false;
                    near_far.innerHTML = "";
                }   
                else if(txtno1!==random && count<=9) {
                    notification.innerHTML = "Incorrect !!";
                    if(txtno1<random) {
                        near_far.innerHTML = "Very Low.";
                    }
                    else if (txtno1>random) {
                        near_far.innerHTML = "Very High.";
                    }
                }
                else if(txtno1!==random && count==10) {
                    notification.innerHTML = "Incorrect !!";
                    near_far.innerHTML = "Game Over!";
                    restart.disabled = false;
                    button.disabled = true;
                    txtno1.disabled = true;
                    // console.log(count);
                }
                count++;
                // console.log(count);
            }
        }
        // button.addEventListener('click', guess_game);