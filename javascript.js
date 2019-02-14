function basicJavascript(){
  var cats = ["Boomi", "Momo"];
  document.getElementById("week1").textContent = cats[0];
  moreBasic(cats);
}

function moreBasic(cats){
  if (cats){
    document.getElementById("week1").textContent = cats[1];
  }
}

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