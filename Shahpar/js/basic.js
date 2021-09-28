// Ex 1
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

// Ex 2
function printInfo2() {
  let fName = document.querySelector("#f-name2").value;
  let lName = document.querySelector("#l-name2").value;
  let age = document.querySelector("#age2").value;
  let jobTitle = document.querySelector("#job-title").value;

  let userInfo = document.querySelector("#info2");

  addDiv2(fName, userInfo, false);
  addDiv2(lName, userInfo, false);
  addDiv2(age, userInfo, false);
  addDiv2(jobTitle, userInfo, true);
}

function addDiv2(text, userInfo, isJobTitle) {
  if (isJobTitle && text == "IT") {
    userInfo.innerHTML += `<div style="background-color: purple;"> ${text} </div>`;
  } else if (isJobTitle && text == "hospitality") {
    userInfo.innerHTML += `<div style="background-color: yellow;"> ${text} </div>`;
  } else {
    userInfo.innerHTML += `<div> ${text} </div>`;
  }
}

function styleJobtitle(value) {
  let element = document.querySelector("#select-option");
  if (value == "IT") {
    element.style.backgroundColor = "purple";
  } else {
    element.style.backgroundColor = "yellow";
  }
}

document.getElementById("btn-submit2").addEventListener("click", printInfo2);
