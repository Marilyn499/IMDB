const fs = require('fs');
import {Imdb} from "./claseImdb"
import { Movie } from "./classMovie"

let movie3:Movie = new Movie("Interstellar", 2014,"EEUU","Drama");
movie3.toStringMovie();
let data = JSON.parse(fs.readFileSync("imdbBBDD.json","UTF-8"));
let movies : Movie[] = new Array(); 
for (let i = 0; i < data.peliculas.length; i++)
{
    movies.push(new Movie(data.peliculas[i].title, data.peliculas[i].releaseYear, data.peliculas[i].nationality,data.peliculas[i].genre)); 
}
movies.push(movie3);
let imdb : Imdb = new Imdb(movies);
imdb.escribirEnFicheroJson("imdbBBDD.json");

