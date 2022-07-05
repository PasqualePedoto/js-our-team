// $ CONSEGNA

// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)

// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato


// * DATI

// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 

// $ --------------------------------------------------
// $ SVOLGIMENTO
// $ --------------------------------------------------

// # MILESTONE 0

// * Creiamo un array contenente tutti i dati all'interno

const teamMembers = [
    {
        "fullName": 'Wayne Barnett',
        "role": 'Founder & CEO',
        "stringPhoto": 'wayne-barnett-founder-ceo.jpg'
    },
    {
        "fullName": 'Angela Caroll',
        "role": 'Chief Editor',
        "stringPhoto": 'angela-caroll-chief-editor.jpg'
    },
    {
        "fullName": 'Walter Gordon',
        "role": 'Office Manager',
        "stringPhoto": 'walter-gordon-office-manager.jpg'
    },
    {
        "fullName": 'Angela Lopez',
        "role": 'Social Media Manager',
        "stringPhoto": 'angela-lopez-social-media-manager.jpg'
    },
    {
        "fullName": 'Scott Estrada',
        "role": 'Developer',
        "stringPhoto": 'scott-estrada-developer.jpg'
    },
    {
        "fullName": 'Barbara Ramos',
        "role": 'Graphic Designer',
        "stringPhoto": 'barbara-ramos-graphic-designer.jpg '
    },
];

// # MILESTONE 1 

// * Stampiamo il nome, il ruolo e la stringa di ogni oggetto presente nell'array

for (let i = 0; i < teamMembers.length; i++) {
    const currentMember = teamMembers[i];

    console.log('------- Team Member -------');

    for (let key in currentMember) {
        console.log(key + ' : ' + currentMember[key]);
    }
}

// # MILESTONE 2

// * Stampiamo il nome, il ruolo e la stringa di ogni oggetto presente nell'array all'interno del DOM

const memberList = document.getElementById('member-list');

// for (let i = 0; i < teamMembers.length; i++) {
//     const currentMember = teamMembers[i];

//     const element = document.createElement('li');
//     element.innerText = `Member no. ${i + 1}`;
//     const insideList = document.createElement('ul');
//     element.appendChild(insideList);

//     for (let key in currentMember) {
//         const insideElement = document.createElement('li');
//         insideElement.innerText = key + ' : ' + currentMember[key] + ' ';
//         insideList.appendChild(insideElement);
//     }

//     memberList.appendChild(element)
// }

// # BONUS 1

// Trasformare la stringa foto in una immagine effettiva 

for (let i = 0; i < teamMembers.length; i++) {
    const currentMember = teamMembers[i];

    const element = document.createElement('li');
    element.innerText = `Member no. ${i + 1}`;
    const insideList = document.createElement('ul');
    element.appendChild(insideList);

    for (let key in currentMember) {
        const insideElement = document.createElement('li');
        if (key === 'stringPhoto') {
            const memberImg = `<img src="img/${currentMember[key]}" alt="img-${i + 1}">`;
            insideElement.innerHTML = memberImg;
        } else {
            insideElement.innerText = key + ' : ' + currentMember[key];
        }
        insideList.appendChild(insideElement);
    }

    memberList.appendChild(element)
}