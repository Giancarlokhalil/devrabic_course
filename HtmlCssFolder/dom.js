// console.log(document.body);

var newElement = document.createElement('p');
// var newContent = document.createTextNode("Hello World!");
// newElement.appendChild(newContent);

newElement.innerHTML = "<b>Hello World</b>";

document.body.append(newElement);

// var test1 = document.createElement("h1");
// var test2 = document.createTextNode("Mercedes event!!");

// test1.appendChild(test2);

// document.body.append(test1);

const devrabic = document.querySelector("#myId");
const devrabic1 = document.querySelector(".myClass");
devrabic.style.color = "red";

const anchor = document.querySelector("a");

anchor.setAttribute("href", "https://facebook.com");
const link = anchor.getAttribute("href");
console.log(link)


const myList = document.querySelectorAll(".myList li");
console.log(myList);

for(list of myList) {
    list.classList.add("customList");
    list.classList.remove("removableClass");
}

devrabic.removeChild();
devrabic.remove();









