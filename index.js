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
    }
];

function getRandomInt(num) {
    let randomNr = Math.floor(Math.random() * num);
    let value = randomNr + "rem";
    return value;
}

for(let i = 0; i < images.length; i++) {
    const main = document.getElementById("searchField");
    const img = document.createElement("img");

    img.alt = images[i].name;
    img.src = images[i].src;
    img.style.bottom = getRandomInt(30);
    img.style.left = getRandomInt(60);
    img.onclick = function () {
        addToFoundItems(images[i]);
    };
    main.appendChild(img)
};

let foundItems = [];

function addToFoundItems(image) {
    if(!foundItems.includes(image)) {
        foundItems.push(image);
    }
    displayInFooter();
    
};

function displayInFooter() {
    const foundItemsElement = document.getElementById("foundItems");
    foundItemsElement.innerHTML = "";
    
    for(let i = 0; i < foundItems.length; i++) {
        const newImage = document.createElement("img");
        newImage.src = foundItems[i].src;
        newImage.alt= foundItems[i].name;
        newImage.style.width = "50%";
        newImage.style = "border-radius: 50%";

        foundItemsElement.appendChild(newImage)
    }
    if(foundItems.length == images.length) {
        alert("You've got them all")
    }   
};

function submitName() {
    let inputField = document.getElementById("name");
    let name = inputField.value;
    
    let header = document.getElementById("header");
    header.textContent = `${name}'s Items`;
    inputField.value = null;

}


