/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Wesley Ferreira",
    photo: "images/Me.jpeg",
    favoriteFoods: [
      'Pizza',
      'Sushi',
      'Ice Cream',
    ],
    hobbies: ['Workout', 'Gaming', 'Bike'],
    placesLived: []
  };


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Suzano, SP',
      length: '26 years'
    }
  );


/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

// Iterate over favoriteFoods array and append to HTML
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


