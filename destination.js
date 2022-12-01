let data = {
    "destinations": [
      {
        "name": "Moon",
        "images": {
          "png": "./assets/destination/image-moon.png",
          "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "name": "Mars",
        "images": {
          "png": "./assets/destination/image-mars.png",
          "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "name": "Eupora",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ],
  }
let moon = document.querySelector('.garig-moon');
let mars = document.querySelector('.garig-mars');
let eupora = document.querySelector('.garig-eupora');
let titan = document.querySelector('.garig-titan');

moon.addEventListener('click', changeTextsMoon);
function changeTextsMoon() {
  document.querySelector('#moon-img').src = data.destinations[0].images.png;
  document.querySelector('#moon').innerHTML = data.destinations[0].name;
  document.querySelector('#text').innerHTML = data.destinations[0].description;
  document.querySelector('#km').innerHTML = data.destinations[0].distance;
  document.querySelector('#days').innerHTML = data.destinations[0].travel;
  moon.classList.toggle('active');
  let mars = document.querySelector('.garig-mars');
  mars.classList.remove('active');
  let eupora = document.querySelector('.garig-eupora');
  eupora.classList.remove('active');
  let titan = document.querySelector('.garig-titan');
  titan.classList.remove('active');
}

mars.addEventListener('click', changeTextsMars);
function changeTextsMars() {
  document.querySelector('#moon-img').src = data.destinations[1].images.png;
  document.querySelector('#moon').innerHTML = data.destinations[1].name;
  document.querySelector('#text').innerHTML = data.destinations[1].description;
  document.querySelector('#km').innerHTML = data.destinations[1].distance;
  document.querySelector('#days').innerHTML = data.destinations[1].travel;
  mars.classList.toggle('active');
  let moon = document.querySelector('.garig-moon');
  moon.classList.remove('active');
  let eupora = document.querySelector('.garig-eupora');
  eupora.classList.remove('active');
  let titan = document.querySelector('.garig-titan');
  titan.classList.remove('active');
}

eupora.addEventListener('click', changeTextsEupora);
function changeTextsEupora() {
  document.querySelector('#moon-img').src = data.destinations[2].images.png;
  document.querySelector('#moon').innerHTML = data.destinations[2].name;
  document.querySelector('#text').innerHTML = data.destinations[2].description;
  document.querySelector('#km').innerHTML = data.destinations[2].distance;
  document.querySelector('#days').innerHTML = data.destinations[2].travel;
  eupora.classList.toggle('active');
  let moon = document.querySelector('.garig-moon');
  moon.classList.remove('active');
  let mars = document.querySelector('.garig-mars');
  mars.classList.remove('active');
  let titan = document.querySelector('.garig-titan');
  titan.classList.remove('active');
}

titan.addEventListener('click', changeTextsTitan);
function changeTextsTitan() {
  document.querySelector('#moon-img').src = data.destinations[3].images.png;
  document.querySelector('#moon').innerHTML = data.destinations[3].name;
  document.querySelector('#text').innerHTML = data.destinations[3].description;
  document.querySelector('#km').innerHTML = data.destinations[3].distance;
  document.querySelector('#days').innerHTML = data.destinations[3].travel;
  titan.classList.toggle('active');
  let moon = document.querySelector('.garig-moon');
  moon.classList.remove('active');
  let eupora = document.querySelector('.garig-eupora');
  eupora.classList.remove('active');
  let mars = document.querySelector('.garig-mars');
  mars.classList.remove('active');
}
