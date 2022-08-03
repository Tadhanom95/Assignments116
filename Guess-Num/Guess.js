// Guess a random integer from 1 to 100 
let num = Math.floor(Math.random() * 11);

        let guess = prompt("guess a number between 1 and 100");

        if(guess > num) {
            alert("higher " + " and the number was " + num);
            guessed = false

        }else if (guess < num) {
            alert("Lower " + " and the number was " + num);
            guessed = false
        
        }else{
            alert("Congratulations! You guessed the correct number, which was " + guess );
            guessed = true
        }