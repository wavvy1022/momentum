


const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info){
    // info.preventDefault();
    // console.log(info);
    const userName = loginInput.value;
    console.log(userName);

}

loginForm.addEventListener("submit", onLoginSubmit)


