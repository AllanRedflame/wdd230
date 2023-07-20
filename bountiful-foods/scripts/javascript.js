const year = new Date().getFullYear();
const modified = document.lastModified;
const thingy = document.getElementById("last-updated");

document.getElementById("name-location").innerHTML = "David Poulsen | Utah | BYU-Idaho"; 
document.getElementById("last-updated").innerHTML = "Last updated: " + modified;


function toggleMenu() {
    //document.getElementById("nav-div").classList.toggle("open");
    document.getElementsByClassName("nav-dropdown")[0].classList.toggle("open");

}


let displayStorage = function() {
    orders = localStorage.getItem("orders");

    if (orders.length == 0) {
        outputParagraph = document.getElementById("submission-count");
        outputParagraph.innerHTML = `You have created ${orders.length + 1} drink.`;
    }
    else {
        outputParagraph = document.getElementById("submission-count");
        outputParagraph.innerHTML = `You have created ${orders.length + 1} drinks.`;
    }

}

displayStorage();

