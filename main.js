/* Male Array */

let male = {
    "0": [
        {"image": "./assets/dogs_male/male1.jpg", "name": "Cooper"}
    ],
    "1": [
        {"image": "./assets/dogs_male/male2.jpg", "name": "Buddy"}
    ],
    "2": [
        {"image": "./assets/dogs_male/male3.jpg", "name": "Milo"}
    ],
    "3": [
        {"image": "./assets/dogs_male/male4.jpg", "name": "Rocky"}
    ],
    "4": [
        {"image": "./assets/dogs_male/male5.jpg", "name": "Duke"}
    ],
    "5": [
        {"image": "./assets/dogs_male/male6.jpg", "name": "Tuker"}
    ],
    "6": [
        {"image": "./assets/dogs_male/male7.jpg", "name": "Leo"}
    ],
    "7": [
        {"image": "./assets/dogs_male/male8.jpg", "name": "Jax"}
    ],
    "8": [
        {"image": "./assets/dogs_male/male9.jpg", "name": "Ollie"}
    ],
    "9": [
        {"image": "./assets/dogs_male/male10.jpg", "name": "Louie"}
    ],
};

document.getElementById("next-male").addEventListener("click", generateMale);

/* First assign a value, because some might
go with the first options
*/

let randomMaleName = male[0][0].name;

function generateMale() {
    let randomMale = Math.floor(Math.random() * Object.keys(male).length);
    let randomMaleImg = male[randomMale][0].image;
    randomMaleName = male[randomMale][0].name;

    document.getElementById("maleimg").src = randomMaleImg;

    console.log(`Male Option: ${randomMale}`);
}

/* Female Array */

let female = {
    "0": [
        {"image": "./assets/dogs_female/female1.jpg", "name": "Alexis"}
    ],
    "1": [
        {"image": "./assets/dogs_female/female2.jpg", "name": "Aspen"}
    ],
    "2": [
        {"image": "./assets/dogs_female/female3.jpg", "name": "Abby"}
    ],
    "3": [
        {"image": "./assets/dogs_female/female4.jpg", "name": "Bambi"}
    ],
    "4": [
        {"image": "./assets/dogs_female/female5.jpg", "name": "Bailey"}
    ],
    "5": [
        {"image": "./assets/dogs_female/female6.jpg", "name": "Carmella"}
    ],
    "6": [
        {"image": "./assets/dogs_female/female7.jpg", "name": "Cleo"}
    ],
    "7": [
        {"image": "./assets/dogs_female/female8.jpg", "name": "Cora"}
    ],
    "8": [
        {"image": "./assets/dogs_female/female9.jpg", "name": "Clover"}
    ],
    "9": [
        {"image": "./assets/dogs_female/female10.jpg", "name": "Dottie"}
    ],
};

document.getElementById("next-female").addEventListener("click", generateFemale);

/* First assign a value, because some might
go with the first options
*/

let randomFemaleName = female[0][0].name;

function generateFemale() {
    let randomFemale = Math.floor(Math.random() * Object.keys(female).length);
    let randomFemaleImg = female[randomFemale][0].image;
    randomFemaleName = female[randomFemale][0].name;

    document.getElementById("femaleimg").src = randomFemaleImg;

    console.log(`Female Option: ${randomFemale}`);
}

let lockMale = document.getElementById("lock-male");
let lockFemale = document.getElementById("lock-female");
let nextMale = document.getElementById("next-male");
let nextFemale = document.getElementById("next-female");
let countMale = 0;
let countFemale = 0;

/* Create array to push names */
let arrMale = [];
let arrFemale = [];
let arrFinal = [];

lockMale.onclick = function () {
    this.disabled = true;
    nextMale.disabled = true;
    nextMale.title = "🚫 Disabled! You choice is now locked!";
    this.title = "🚫 Disabled! You choice is now locked!";
    countMale++;
    console.log(`Count Male: ${countMale}`);

    /* If clicked once */
    if (countMale == 1) {
        document.getElementById("match-status").innerHTML = `Male is Choosen: ${randomMaleName}`;
    }

    // Add male name to specified array
    arrMale.push(randomMaleName);
    console.log(arrMale);
}

lockFemale.onclick = function () {
    this.disabled = true;
    nextFemale.disabled = true;
    nextFemale.title = "🚫 Disabled! You choice is now locked!";
    this.title = "🚫 Disabled! You choice is now locked!";
    countFemale++;
    console.log(`Count Female: ${countFemale}`);

    /* If clicked once */
    if (countFemale == 1) {
        document.getElementById("match-status").innerHTML = `Female is Choosen: ${randomFemaleName}`;
    }

    // Add female name to specified array
    arrFemale.push(randomFemaleName);
    console.log(arrFemale);
}

document.getElementById("show-pair").addEventListener("click", showPair);

/* Show matching pairs */
function showPair() {
   document.getElementById("final-pair").innerHTML = `Male: ${randomMaleName} - Female: ${randomFemaleName}`; 
   document.getElementById("show-pair").style.display = "none";
   document.getElementById("match-status").style.display = "none";
}
