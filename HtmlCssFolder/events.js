const myButton = document.querySelector("button")
myButton.addEventListener("click", function(e) {
    console.log("Hi")
    myDiv.removeEventListener("mouseover", sayMouseOver)
});

const myDiv = document.querySelector("div")
myDiv.addEventListener("mouseover", sayMouseOver, 
    {once: true});


function sayMouseOver() {
    alert("mouseover");
}

const myForm = document.querySelector("form");
const myInput = document.querySelector("name");

// myForm
// myInput.addEventListener("change", (e) => {
//     console.log(e.target.value);
// })

myForm.addEventListener("submit", e => {
    e.preventDefault();
    const nameInput = document.querySelector("name");
    const passwordInput = document.querySelector("password");

    const name = nameInput.value;
    const password = passwordInput.value;

    console.log(`Name: ${name}; Password: ${password}`)
})