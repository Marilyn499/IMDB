import {Imdb} from "./claseImdb"
import { Movie } from "./classMovie"

const fs = require("fs");

let movie1:Movie = new Movie("Titac",1997,"EEUU","Drama");
let movie2:Movie = new Movie("The Imitation Game",2014,"EEUU","Biopic")

let prueba1:Imdb = new Imdb([movie1,movie2]);
// prueba1.printAllMovies();
let data = JSON.stringify(prueba1);
console.log(data);
fs.writeFileSync("imdbBBDD.json", data);
