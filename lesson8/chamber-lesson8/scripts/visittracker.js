window.onload = function() {

    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes(); 
    let seconds = currentDate.getSeconds(); 

    let year = String(currentDate.getFullYear());
    let month = String(currentDate.getMonth() + 1);
    let day = String(currentDate.getDate());
    let time = [hours, minutes, seconds];
    let exportDate = [year, month, day, time];

    let message = "nothing!";




    if (localStorage.hasOwnProperty("lastDate")) {
        let importDate = localStorage.getItem("lastDate");
        let lastDate = JSON.parse(importDate);
        let lastVisit = currentDate - lastDate;

        if (lastDate[0] == year) {
            if (lastDate[1] == month) {                
                if (lastDate[2] == day) {
                    if (lastDate[3][0] == hours) {

                        if (lastDate[3][1] == minutes) {

                            if (lastDate[3][2] == seconds) {
                                localStorage.setItem("lastDate", JSON.stringify(exportDate));
                            }

                            else {
                                let secondDiff = seconds - lastDate[3][2];
                                message = `It has been ${secondDiff} second(s) since you've visited.`;
                                localStorage.setItem("lastDate", JSON.stringify(exportDate));

                            }
                        }

                        else {
                            let minuteDiff = minutes - lastDate[3][1];
                            message = `It has been ${minuteDiff} minute(s) since you've visited.`;
                            localStorage.setItem("lastDate", JSON.stringify(exportDate));

                        }

                    }

                    else {
                        let hourDiff = hours - lastDate[3][0];
                        `It has been ${hourDiff} hour(s) since you've visited.`;     
                        localStorage.setItem("lastDate", JSON.stringify(exportDate));
           
                    }
                }
                
                else {
                    let dayDiff = day - lastDate[2];
                    message = `It has been ${dayDiff} day(s) since you've visited.`;
                    localStorage.setItem("lastDate", JSON.stringify(exportDate));

                }

            }
            else {
                let monthDiff = month - lastDate[1];
                message = `It has been ${monthDiff} month(s) since you've visited.`;
                localStorage.setItem("lastDate", JSON.stringify(exportDate));

            }

        
        }
        else {
            let yearDiff = year - lastDate[0];
            message = `It has been ${yearDiff} year(s) since you've visited.`
            localStorage.setItem("lastDate", JSON.stringify(exportDate));

            
        }
    }
    else {
        message = "This is your first visit to this website."
        localStorage.setItem("lastDate", JSON.stringify(exportDate));
    }


    localStorage.setItem("lastDate", JSON.stringify(exportDate));
    visitTracker = document.getElementById("visit-tracker");
    visitTracker.innerHTML = message;

}

localStorage.setItem("lastDate", JSON.stringify(exportDate));
visitTracker = document.getElementById("visit-tracker");
visitTracker.innerHTML = message;
