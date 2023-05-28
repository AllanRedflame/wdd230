const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.getElementById("name-location").innerHTML = "&copy " + year + " David Poulsen | Utah"; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

document.getElementById("header-date").innerHTML = fulldate;
