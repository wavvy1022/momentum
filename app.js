


const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("#login-form a")
const h1Text = document.querySelector("#greeting");

function onLoginSubmit(info){
    info.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add("hidden");
    h1Text.classList.remove("hidden");
    // h1Text.innerText = "hello welcome "+userName
    h1Text.innerText = `hello welcome ${userName}`
}

function handleListClick(event){

    console.log(event);
    loginForm.className
    alert("test");

}


link.addEventListener("click", handleListClick)
loginForm.addEventListener("submit", onLoginSubmit)


