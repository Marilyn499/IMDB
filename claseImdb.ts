import {Professional} from "./classProfessional"

import {Movie} from "./classMovie"

export class Imdb{
    public peliculas:Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
  
    }
    public printAllMovies(){
        for(let i=0; i<this.peliculas.length; i++){
            let datos = this.peliculas[i];
            console.log(datos);
        }
    }
        
}
