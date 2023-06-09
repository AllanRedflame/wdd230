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



//1 Fill with content and complete sections from example
//2 update css with things
//3 hover effect (have I already done this?)
//4 Monday/Tuesday banner that displays announcements (read more on canvas)
//5
