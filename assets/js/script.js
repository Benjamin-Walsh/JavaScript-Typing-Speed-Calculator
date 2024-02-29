//Adds event listener to the start timer button so a function will be performed 
//when the user clicks it.
document.getElementById("start-timer").addEventListener("click", function() {
  
  // The below code increments the timer by 1 every 1000 ms (1 second).
  let timerOn = true;
  // The timerOn variable must be true in order for the following
  // 'if' statement to be executed.
  
  const interval = setInterval(function() {
  // The above code executes the function below at an interval specified below.
    
    if (timerOn) {  
      // Creates a variable called 'time' which is given a value equal to
      // the text contained within the span with the 'timer' id.
      let time = document.getElementById("timer").innerText;
      
      // Increases the time variable by 1.
      time++;

      // Sets the text of the span with 'timer' id to the value
      // of the time variable after it has been increased.
      document.getElementById("timer").innerText = time;
    }  

    // Adds an event listener which causes specified function to run 
    // when the 'submit' button is clicked.  
    document.getElementById("submit-button").addEventListener("click", function() {

      // Stores the text from the text box and the paragraph typed by the user
      // in variables called 'parA' and 'parB'.
      let parA = document.getElementById("paragraph").innerText
      let parB = document.getElementById("textBox").value

      // If statement executes code if text in parA and parB are the same.
      if (parA == parB) {
        // Stops the counter (timer) from counting if the user typed parB 
        // the same as parA.
        timerOn = false;

        // Stores the seconds taken to type the paragraph in a variable.
        let secondsTaken = document.getElementById("timer").innerText;

        // There are 60 seconds in a minute. To find the words per minute typed,
        // I need to first find how many times 60 divides into the seconds taken
        // to type the paragraph. This gives a value to modify the number of words 
        // in the original paragraph by.
        let modifier = secondsTaken / 60;
        // There are 48 words in the paragraph the user must type. 
        // In the above equation, if it took the user 30 seconds, 30/60 = 0.5,
        // so the words per minute (wpm) would be 48/0.5 = 96wpm.
        let wpmFloat = 48 / modifier;
      }
    })
    
  // Sets interval to 1000ms. This means there is a 1-second delay between
  // instances of the function being run.  
  }, 1000);  
});





