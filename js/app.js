const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const title = document.querySelector("#title")
const link = document.querySelector("a")
const greeting = document.querySelector("#greetings")

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"

function onLoginBtnClick(){
    title.classList.toggle("toggleTitle");
    const username = loginInput.value;
    if(username === "")
        alert("please enter your name!");
    else if(username.length > 15)
        alert("your name is to long");
}

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY,typedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(typedUsername);
}

function onLinkClick(event){
    console.log(event);
    event.preventDefault();
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
link.addEventListener("click",onLinkClick)

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}