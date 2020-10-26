const fs = require('fs');
import {Imdb} from "./claseImdb"
import { Movie } from "./classMovie"

let movie1:Movie = new Movie("Titac",1997,"EEUU","Drama");
let movie2:Movie = new Movie("The Imitation Game",2014,"EEUU","Biopic")

//let todasLasPeliculas:Imdb = new Imdb([movie1,movie2])
//todasLasPeliculas.printAllMovies();


// let json = JSON.stringify(todasLasPeliculas,null,2);
// fs.writeFileSync('imdbBBDD.json', json, function (err) {
//     if (err) throw err;
//     console.log('It\'s saved!');
//   });

  // let peliculas = fs.readFileSync('imdbBBDD.json',"UTF-8");
  // let imdb = JSON.parse(peliculas);
  // console.log(imdb.peliculas);


  let dataBase = new Imdb([movie1,movie2]);
  // dataBase.escribirEnFicheroJson("archivo.json");

  dataBase.obtenerInstanciaIMDB("imdbBBDD.json");