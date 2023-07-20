const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.getElementById("name-location").innerHTML = "David Poulsen | Utah | BYU-Idaho"; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;


function toggleMenu() {
    //document.getElementById("nav-div").classList.toggle("open");
    document.getElementsByClassName("nav-dropdown")[0].classList.toggle("open");

}


