const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let counter = 0;


let printStorage = function() {
    if (localStorage.getItem("orders") == null) {
        localStorage.setItem("orders", "");
        orders = localStorage.getItem("orders");
        orders += "1";
    }
    else {
        orders = localStorage.getItem("orders");
        localStorage.setItem("orders", orders += "1");
    }

}

   async function getFruitData() {
    const response = await fetch(url);
    var data = await response.json();
    displayFruit(data);

    

    
            const form = document.querySelector(".myForm");
    
            function noRefresh(event) {     
                event.preventDefault(); 
                
            }  
                form.addEventListener('submit', noRefresh);

    getFruitData.displayOutput = function() {

                let outputContainer = document.querySelector(".output");
                let text = ["Name: ", "Email: ", "Phone: ", "Ingredient #1: ", "Ingredient #2: ", "Ingredient #3: ", "Additional Information: "];
                const modified = document.lastModified;
                let elementsArray = [];
                for (i = 0; i < 6; i++) {
            
                    let newElement = document.createElement("p");
                    newElement.innerHTML = text[i] + form.elements[i].value;
            
                    outputContainer.appendChild(newElement);
            
                    }
            
                    elementsArray.push(form.elements[3].value);
                    elementsArray.push(form.elements[4].value);
                    elementsArray.push(form.elements[5].value);
            

                    //Index [0]: Carbs 
                    //Index [1]: Protein
                    //Index [2]: Fat
                    //Index [3]: Calories
                    // Index[4]: Sugar
                    let nutrients = [0, 0, 0, 0, 0];

                    let nutrientsText = ["Carbs: ", "Protein: ", "Fat: ", "Calories: ", "Sugar: "];

                    for (j = 0; j < data.length; j++) {
                        if (data[j]["name"] == elementsArray[0] ||
                            data[j]["name"] == elementsArray[1] ||
                            data[j]["name"] == elementsArray[2]) {
            
                            
                            //Add the nutrients to the nutrient array.
                            nutrients[0] += data[j]["nutritions"]["carbohydrates"];
                            nutrients[1] += data[j]["nutritions"]["protein"];
                            nutrients[2] += data[j]["nutritions"]["fat"];
                            nutrients[3] += data[j]["nutritions"]["calories"];
                            nutrients[4] += data[j]["nutritions"]["calories"];
                            //...I don't actually know what these are measured in. Grams, probably?
                        }
                    }

                    //Iterate over both the nutrients variable and nutrientsText variable to create complete set of <p> elements.
                    for (i = 0; i < 5; i++) {
                        let newElement = document.createElement("p");
                        newElement.innerHTML = String(nutrientsText[i]) + String(Math.round(nutrients[i]));
                        outputContainer.appendChild(newElement)
                    }

                    const date = new Date().toLocaleString();

                    let newElement = document.createElement("p");
                    newElement.innerHTML = date;
                    outputContainer.appendChild(newElement);
                }
            }


    

    const displayFruit = (fruit) => {
        let firstOption = document.querySelector("#first-option");
        let secondOption = document.querySelector("#second-option");
        let thirdOption = document.querySelector("#third-option");
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < fruit.length; j++) {
    
                let newElement = document.createElement('option');
                newElement.innerHTML = `${fruit[j]["name"]}`;
                if (i == 0) {
                    firstOption.appendChild(newElement); 
                }
    
                else if (i == 1) {
                    secondOption.appendChild(newElement); 
                }
                else {
                    thirdOption.appendChild(newElement); 
                }
            
            }}};

   
            displayFruit(getFruitData());



//Displays and hides output div and form
function toggleOutput() {
    getFruitData.displayOutput()
    document.getElementsByClassName("output")[0].classList.toggle("output-open");
    document.getElementsByClassName("myForm")[0].classList.toggle("form-closed");
}



