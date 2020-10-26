import {Professional} from "./classProfessional"
import {Movie} from "./classMovie"
const fs = require ('fs');

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
    public escribirEnFicheroJson(nombreFichero:string){
        fs.writeFileSync(nombreFichero,JSON.stringify(this.peliculas));
    }
    public obtenerInstanciaIMDB(nameFile:string){
        let data = JSON.parse(fs.readFileSync(nameFile,"UTF-8"));
        console.log(data);
    }   
}
