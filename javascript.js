function week01(){
  var cats = ["Boomi", "Momo","Maverick", "Kate"];
  document.getElementById("week1").textContent = cats[0];
  
  moreBasic(cats);
}

function week01AA(){
  var Mav = {
    eyes: "brown",
    hair: "black",
    height: "5'11",
  }
  document.getElementById("week1").textContent = Mav.eyes + " " + Mav.hair + " " + Mav.height;
}

function moreBasic(cats){
  if (cats){
    document.getElementById("week1").textContent = cats[1];
  }
}

function week01loop(){
  var cats = ["Boomi", "Momo","Maverick", "Kate"];
  var i;
  for (i = 0; i < cats.length; i++){
    document.getElementById("week1").textContent += (cats[i]+", ");
  }
}
//JAVASCROIPT WEEK2
function objects(){
  var thisObject = {
    bird: "swan",
    cat: "tiger",
    dog: "dalmation",
    animal: "zebra",
    favorite: function(){
      return this.cat + this.dog;
    }
  }
  var birds = thisObject.bird.toUpperCase();
  iInheritStuff(birds)
}

function iInheritStuff(what){

}
//JSON
function json(){
  var me = {
    color: "yellow",
    animal: "raccoon",
    videoGame: "pokemon",
    makeUp: "urbanDecay",
  }
  var favoritesStringify = JSON.stringify(me);
  var favoritesParse = JSON.parse(favoritesStringify);

  document.getElementById("stringify").textContent = favoritesStringify;
  document.getElementById("parse").textContent = favoritesParse;
}



// Transitions with javascript
function makeMeUgly(id, button2, button, clr){
  var elem = document.getElementById(id);
  elem.style.transition = "background 3.0s linear 0s";
  elem.style.background = clr;

  var button = document.getElementById(button);
  button.innerText = "Thank you";

  var button2 = document.getElementById(button2);
  button2.innerText = "Oh my gosh im hideous";

  document.querySelector("#what-i-do").addEventListener("click", makeMePretty);

}

function makeMePretty(){
  var elem = document.getElementById('getUgly');
  elem.style.transition = "background 3.0s linear 0s";
  elem.style.background = 'white';

  var button2 = document.getElementById('what-i-do');
  button2.innerText = "I do NOTHING";

  var button = document.getElementById('transitionButton');
  button.innerText = "Make me Ugly";
}
//WEEK 4
function createDropdown(movies) {
  for (let movie of movies) {
    // let movieElement = document.createElement("option");
    // movieElement.value = movie.title;
    // movieElement.innerText = movie.title;
    let select = document.querySelector(".dropdown");
    select.options[select.options.length] = new Option(movie.title, movie.title);
  }
}

let movies = localStorage.getItem("movies");
if (!movies) {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

  request.onload = function () {
    movies = JSON.parse(this.response);
    localStorage.setItem("movies", JSON.stringify(movies));
    createDropdown(movies);
  }

  // Send request
  request.send();
} else {
  createDropdown(movies);
}

//WEEK 5 

var xmlhttp = new XMLHttpRequest();
var url = "churchOfDan.txt";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br>';
  }
  document.getElementById("ajax").innerHTML = out;
}