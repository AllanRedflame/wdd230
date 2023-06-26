const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  
getProphetData();

const displayProphets = (prophets) => {
 const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birth = document.createElement("p");
        let birthday = document.createElement("p");
        let death = document.createElement("p");
        let length = document.createElement("p");
        let children = document.createElement("p");
        

      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ____________`;
  
      // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ______________`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birth.textContent = `Birth date: ${prophet.birthdate}`;
        birthday.textContent = `Place of Birth: ${prophet.birthplace}`;
        death.textContent = `Death date: ${prophet.death}`;
        length.textContent = `Presidency length: ${prophet.length} years`;
        children.textContent = `Number of children: ${prophet.numofchildren}`;


  
      // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
    
        cards.appendChild(card);

        card.appendChild(birth);
        card.appendChild(birthday);
        card.appendChild(death);
        card.appendChild(length);
        card.appendChild(children);
    }); // end of forEach loop
} // end of function expression