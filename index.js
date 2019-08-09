let images = [
    {
        name: "pikachu",
        src: "https://giantbomb1.cbsistatic.com/uploads/scale_small/0/6087/2437349-pikachu.png"
    },
    {
        name: "charmander",
        src: "https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891761-004charmander.png"
    },
    {
        name:"bulbasaur",
        src: "https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png"
    },
    {
        name: "squirtle",
        src: "https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891764-007squirtle.png"
    },
    {
        name: "ivysaur",
        src: "https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891759-002ivysaur.png"
    }
];

function getRandomInt(num, css) {
    let randomNr = Math.floor(Math.random() * num);
    let value = randomNr + css;
    return value;
}

for(let i = 0; i < images.length; i++) {
    const main = document.getElementById("searchField");
    const img = document.createElement("img");

    img.alt = images[i].name;
    img.src = images[i].src;
    img.style.bottom = getRandomInt(30, "vh");
    img.style.left = getRandomInt(60, "vw");
    img.onclick = function () {
        addToFoundItems(images[i]);
        this.style.display="none";
    };
    main.appendChild(img)
};

let foundItems = [];

function addToFoundItems(image) {
    if(!foundItems.includes(image)) {
        foundItems.push(image);
    }
    displayImages();
    
};

function displayImages() {
    const foundItemsElement = document.getElementById("foundItems");
    foundItemsElement.innerHTML = "";
    
    for(let i = 0; i < foundItems.length; i++) {
        const newImage = document.createElement("img");
        newImage.src = foundItems[i].src;
        newImage.alt= foundItems[i].name;
        foundItemsElement.appendChild(newImage)
    }
    if(foundItems.length == images.length) {
        setTimeout(function() {alert("You've got them all")}, 500)
    } 
    
    const newDiv = document.createElement("div");
    newDiv.id="score"
    foundItemsElement.appendChild(newDiv);
    newDiv.textContent = `${foundItems.length}/${images.length}`; 
};

function submitName() {
    let inputField = document.getElementById("name");
    let name = inputField.value;

    if (doesNotPassAllValidations(name)) {
        return null;
    };
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let header = document.getElementById("header");
    header.textContent = `${name}'s Pokemons`;
    inputField.value = null;
};

function doesNotPassAllValidations (name) { 
    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    } else {
        return false;
    }
}
