/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Wesley Ferreira';
let currentYear = 2024;
let profilePicture = 'images/Me.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

const imageElement = document.querySelector('img');
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

const favoriteFoods = ['Pizza', 'Sushi', 'Ice Cream'];

foodElement.innerHTML = favoriteFoods.join('<br>');

const newFavoriteFood = 'Whey Protein';

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.shift();




