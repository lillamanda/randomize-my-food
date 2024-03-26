
import {proteinsArray, vegetablesArray, carbsArray, saucesArray} from "/foodItems.js";

/* <div id="protein"></div>
<div id="vegetables"></div>
<div id="carbs"></div>
<div id="sauce"></div> */

const proteinEl = document.getElementById("protein-el");
const vegetablesEl = document.getElementById("vegetables-el");
const carbsEl = document.getElementById("carbs-el");
const sauceEl = document.getElementById("sauce-el");


function randomizeMeal(){
    const protein = getRandomFoodComponent(proteinsArray);
    proteinEl.textContent = protein.name;
    // proteinEl.textContent = `${protein.cookingMethod[getRandomArrayIndex(protein.cookingMethod.length)]} ${protein.name}`;

    if (protein.image){
        proteinEl.style.backgroundImage = `url(${protein.image})`;
    }

    const vegetables = getRandomFoodComponent(vegetablesArray);
    vegetablesEl.textContent = vegetables.name;
    if (vegetables.image){
        vegetablesEl.style.backgroundImage = `url(${vegetables.image})`;
    }

    const carbs = getRandomFoodComponent(carbsArray);
    carbsEl.textContent = carbs.name;
    if (carbs.image){
        carbsEl.style.backgroundImage = `url(${carbs.image})`;
    }

    const sauce = getRandomFoodComponent(saucesArray);
    sauceEl.textContent = sauce.name;


}

function getRandomFoodComponent(foodArray){
    return foodArray[getRandomArrayIndex(foodArray.length)];
}

function getRandomArrayIndex(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

randomizeMeal()