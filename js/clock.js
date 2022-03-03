const clock = document.querySelector("h2#clock");

let modifyTime=(time)=>{
    return String(time).padStart(2,"0");
}

function getTime(){
    const date = new Date();

    const hours = modifyTime(date.getHours());
    const min = modifyTime(date.getMinutes());
    const sec = modifyTime(date.getSeconds());

    // const hours = String(date.getHours()).padStart("0",2);
    // const min = String(date.getMinutes()).padStart("0",2);
    // const sec = String(date.getSeconds()).padStart("0",2);

    clock.innerText = `${hours}:${min}:${sec}`;
}

getTime();

setInterval(getTime, 1000);