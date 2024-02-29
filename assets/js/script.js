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

        
      }
    })
    
  // Sets interval to 1000ms. This means there is a 1-second delay between
  // instances of the function being run.  
  }, 1000);  
});





