var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");


button.addEventListener("click",
  function(){
    var newMessage = document.createElement("li"); // created new html element on page
    newMessage.innerHTML = textbox.value; // and then added text to new element, and what ever value that would be inputted into text box
    messages.appendChild(newMessage); // and then appended the li item
    textbox.value = ""; // this clears the text box into an empty str until it is filled with another value and then appended
  });
