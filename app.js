


const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("#login-form a")
const h1Text = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function initialLogic(){

    const storageUserName = localStorage.getItem("userName");

    if(storageUserName!=null){
        loginForm.classList.add(HIDDEN_CLASSNAME);
        h1Text.classList.remove(HIDDEN_CLASSNAME);

        h1Text.innerText = `hello welcome ${storageUserName}`;
    }

}

initialLogic();

function onLoginSubmit(info){
    info.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    h1Text.classList.remove(HIDDEN_CLASSNAME);
    // h1Text.innerText = "hello welcome "+userName
    h1Text.innerText = `hello welcome ${userName}`;
    localStorage.setItem("userName", userName);
}

function handleListClick(event){

    console.log(event);
    loginForm.className
    alert("test");

}


link.addEventListener("click", handleListClick)
loginForm.addEventListener("submit", onLoginSubmit)


