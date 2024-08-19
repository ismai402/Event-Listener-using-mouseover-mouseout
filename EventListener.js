var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", myFunction1);
function myFunction1() {
    myVar.classList.add("my-style");
}

myVar.addEventListener("mouseout", myFunction2);
function myFunction2() {
    myVar.classList.remove("my-style");
}