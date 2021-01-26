const dayTagContainer = document.getElementById("dayTag");
const timeTagContainer = document.getElementById("timeTag");
const monthTagContainer = document.getElementById("monthTag");

let dt = new Date();
const weekdays = [
    "it is Sunday",
    "it is Monday",
    "it is Tuesday",
    "it is Wednesday",
    "it is Thursday",
    "it is Friday",
    "it is Saturday"]

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

dayTagContainer.innerHTML = weekdays[dt.getDay()];
monthTagContainer.innerHTML = monthNames[dt.getMonth()]+" "+dt.getDate();

const intTime = dt.getHours();
if (intTime > 21 || intTime < 3) {
    timeTagContainer.innerHTML = "Good night, ";
} else if (intTime > 3 && intTime < 12) {
    timeTagContainer.innerHTML = "Good morning, ";
} else if (intTime > 12 && intTime < 16) {
    timeTagContainer.innerHTML = "Good afternoon, ";
} else if (intTime > 16 && intTime < 21) {
    timeTagContainer.innerHTML = "Good evening, ";
}

