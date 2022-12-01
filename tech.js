let data = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

let one = document.querySelector('#circle1');
one.addEventListener('click', changeContent1);
function changeContent1() {
    one.classList.toggle('active');
    if (one.classList.contains('active')) {
      one.style.cssText = "background: white; color: black";
    } else {
      one.classList.remove('active');
    }
    two.classList.remove('active');
    three.classList.remove('active');
    document.querySelector('#capsule').innerHTML = data[2].name;
    document.querySelector('#description').innerHTML = data[2].description;
    document.querySelector('#img').src = data[2].images.portrait;
}

let two = document.querySelector('#circle2');
two.addEventListener('click', changeContent2);
function changeContent2() {
  two.classList.toggle('active');
  if (two.classList.contains('active')) {
    two.style.cssText = "background: white; color: black";
  } else {
    two.classList.remove('active');
  }
  one.classList.remove('active');
  three.classList.remove('active');
    document.querySelector('#capsule').innerHTML = data[1].name;
    document.querySelector('#description').innerHTML = data[1].description;
    document.querySelector('#img').src = data[1].images.portrait;
}

let three = document.querySelector('#circle3');
three.addEventListener('click', changeContent3);
function changeContent3() {
  three.classList.toggle('active');
  if (three.classList.contains('active')) {
    three.style.cssText = "background: white; color: black";
  } else {
    three.classList.remove('active');
  }
  one.classList.remove('active');
  two.classList.remove('active');
    document.querySelector('#capsule').innerHTML = data[0].name;
    document.querySelector('#description').innerHTML = data[0].description;
    document.querySelector('#img').src = data[0].images.portrait;
}
