console.log(`This works!`);

/* Male Section */

let male = {
    "0": [
        {"image": "./assets/dogs_male/male1.jpg"}
    ],
    "1": [
        {"image": "./assets/dogs_male/male2.jpg"}
    ],
    "2": [
        {"image": "./assets/dogs_male/male3.jpg"}
    ],
    "3": [
        {"image": "./assets/dogs_male/male4.jpg"}
    ],
    "4": [
        {"image": "./assets/dogs_male/male5.jpg"}
    ],
    "5": [
        {"image": "./assets/dogs_male/male6.jpg"}
    ],
    "6": [
        {"image": "./assets/dogs_male/male7.jpg"}
    ],
    "7": [
        {"image": "./assets/dogs_male/male8.jpg"}
    ],
    "8": [
        {"image": "./assets/dogs_male/male9.jpg"}
    ],
    "9": [
        {"image": "./assets/dogs_male/male10.jpg"}
    ],
};

document.getElementById("next-male").addEventListener("click", generateMale);

function generateMale() {
    let randomMale = Math.floor(Math.random() * Object.keys(male).length);
    let randomMaleImg = male[randomMale][0].image;

    document.getElementById("maleimg").src = randomMaleImg;
}

/* Female Section */

let female = {
    "0": [
        {"image": "./assets/dogs_female/female1.jpg"}
    ],
    "1": [
        {"image": "./assets/dogs_female/female2.jpg"}
    ],
    "2": [
        {"image": "./assets/dogs_female/female3.jpg"}
    ],
    "3": [
        {"image": "./assets/dogs_female/female4.jpg"}
    ],
    "4": [
        {"image": "./assets/dogs_female/female5.jpg"}
    ],
    "5": [
        {"image": "./assets/dogs_female/female6.jpg"}
    ],
    "6": [
        {"image": "./assets/dogs_female/female7.jpg"}
    ],
    "7": [
        {"image": "./assets/dogs_female/female8.jpg"}
    ],
    "8": [
        {"image": "./assets/dogs_female/female9.jpg"}
    ],
    "9": [
        {"image": "./assets/dogs_female/female10.jpg"}
    ],
};

document.getElementById("next-female").addEventListener("click", generateFemale);

function generateFemale() {
    let randomFemale = Math.floor(Math.random() * Object.keys(female).length);
    let randomFemaleImg = female[randomFemale][0].image;

    document.getElementById("femaleimg").src = randomFemaleImg;
}


