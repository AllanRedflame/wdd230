const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.querySelector("p").innerHTML = "&copy " + year; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;

