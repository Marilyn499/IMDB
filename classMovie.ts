//const { Professional } = require("./classProfessional");
//var myLib = require ("./classProfessional");

import {Professional} from "./classProfessional"


export class Movie
{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: string;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor (title: string, releaseYear: number, nationality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
 
    }
    
    public toStringMovie()
    {
        "Title: " + this.title + "\n" +"Release Year: " + this.releaseYear + "\n" + "Nationality: " + this.nationality + "\n" + "Genre: " + this.genre + "\n" + "\n" + "Director: " + "\n" + this.director.toStringProfessional() + "\n" + "Writer: " + this.writer + "\n" +"Plataform: " + this.plataform + "\n" +"Is MCU: " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "\n" + "Actores:" + "\n";

        for (let i = 0; i< this.actors.length; i++) {
        
            console.log(this.actors[i].toStringProfessional());
        }
        
    }

}

