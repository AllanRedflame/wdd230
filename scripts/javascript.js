const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.querySelector("p").innerHTML = "&copy " + year + " David Poulsen | Utah"; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;
