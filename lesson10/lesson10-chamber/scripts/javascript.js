const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.getElementById("name-location").innerHTML = "&copy " + year + " David Poulsen | Utah"; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

document.getElementById("header-date").innerHTML = fulldate;


function toggleMenu() {
    //document.getElementById("nav-div").classList.toggle("open");
    document.getElementsByClassName("nav-dropdown")[0].classList.toggle("open");

}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

console.log(day)

let eventText = document.getElementById("event-text");

if (day === "Monday" || day === "Tuesday") {
    eventText.innerHTML = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

else {
    eventText.innerHTML = "No current annoucements.";
}


