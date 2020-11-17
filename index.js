/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let timeNumArr = time.split(":")
  if (timeNumArr[0] < 12){
    return "Good Morning"
  } else if (timeNumArr[0] < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message){
  let node1 = document.querySelector("#greeting")
  node1.innerText = message
  console.log(node1.innerText)
  return node1.innerText
}