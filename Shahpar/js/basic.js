function printInfo() {
  let fName = document.querySelector("#f-name").value;
  let lName = document.querySelector("#l-name").value;
  let age = document.querySelector("#age").value;
  
  let userInfo = document.querySelector("#info");

  addDiv(fName, userInfo);
  addDiv(lName, userInfo);
  addDiv(age, userInfo);
}

function addDiv(text, userInfo) {
  userInfo.innerHTML += `<div> ${text} </div>`;
}

document.getElementById("btn-submit").addEventListener("click", printInfo);
console.log(document.getElementById("btn"));
