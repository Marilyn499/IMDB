import {Movie} from "./classMovie"


let movie1:Movie = new Movie("Titac",1997,"EEUU","Drama");
let movie2:Movie = new Movie("The Imitation Game",2014,"EEUU","Biopic")
console.log("Esta es la primera pelicula: " + "\n");
movie1.toStringMovie();
console.log("Esta es la segunda pelicula: " + "\n");
movie2.toStringMovie();