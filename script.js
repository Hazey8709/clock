//* Get Elements
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const twelveHours = hours % 12 || 12;
    const AM_PM = hours < 12 ? "AM" : "PM";

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const hourDegrees = (hours / 12) * 360;

    second.style.transform = `rotate(${secondDegrees}deg)`;
    minute.style.transform = `rotate(${minuteDegrees}deg)`;
    hour.style.transform = `rotate(${hourDegrees}deg)`;

    document.querySelector(
        "#digitalClock"
    ).innerText = `${twelveHours}:${formattedMinutes}:${formattedSeconds} ${AM_PM}`;

    //* Logs
    // console.log(
    //     "12-Hour Forma:",
    //     `${hour12}:${formattedMinute}:${formattedSecond} ${AM_PM}`
    // );

    // console.log(
    //     "24-Hour Forma:",
    //     `${getHour}:${getMinute} :${getSecond} ${AM_PM}`
    // );

    // console.log(" ------ ");
}

//* Calls setDate function every second, (1000ms)
//s updates time in real time, (every second)
setInterval(setClock, 1000);
