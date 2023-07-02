const url = "https://allanredflame.github.io/wdd230/lesson9/data.json";

   async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const directory = document.querySelector('div.cards');

    companies.forEach((company) => {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
        let icon = document.createElement('img');

        name.textContent = company.company;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        membership.textContent = `Membership: ${company.membership}`;
        website.href = company.website;
        website.textContent = 'Visit Website';
        icon.setAttribute('src', company.icon);
        icon.setAttribute("alt", "a picture");


        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);


        directory.appendChild(card);
    });
}

getCompanyData();
