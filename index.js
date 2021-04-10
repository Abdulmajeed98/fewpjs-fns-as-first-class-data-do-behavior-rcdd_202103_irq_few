/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeSplited = timeString.split(':');
  let timeNumber = timeSplited[0].parseInt();
  if (timeNumber < 12)
    return 'Good Morning';

  else if (timeNumber > 5)
    return 'Good Evening';

  else {
    return 'Good Afternoon';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  const greeting = document.getElementById('greeting');
  greeting.innerHTML = greet;
}
