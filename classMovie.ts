const { Professional } = require("./classProfessional");
var myLib = require ("./classProfessional");



class Movie
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
        this.actors = new Array(new Professional ("Harrinson Ford", 78, "Male", 83, 185, "Light brown", "Hazel", "Caucasian", false, "American", 0, "Actor"), new Professional ("Carrie Fisher †", 60, "Female", 47, 155, "Dark brown", "Dark brown", "Caucasian", true, "American", 0, "Actress"));
        this.nationality = nationality;
        this.director = new Professional ("Richard Marquand †", 49, "Male", "unknown", "unknown", "Dark brown", "Dark brown", "Caucasian", true, "English", 0, "Director");
        this.writer = "George Lucas";
        this.plataform = "Netflix";
        this.isMCU = false;
        this.mainCharacterName = "Luke Skywalker";
        this.producer = "George Lucas";
        this.distributor = "20th Century Fox";
        this.genre = genre;
 
    }
    
    public toStringMovie()
    {
        console.log ("Title: " + this.title + "\n" +"Release Year: " + this.releaseYear + "\n" + "Nationality: " + this.nationality + "\n" + "Genre: " + this.genre + "\n" + "\n" + "Director: " + "\n" + this.director.toStringProfessional() + "\n" + "Writer: " + this.writer + "\n" +"Plataform: " + this.plataform + "\n" +"Is MCU: " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "\n" + "Actores:" + "\n");
        for (let i = 0; i< this.actors.length; i++) {
        
            console.log(this.actors[i].toStringProfessional());
        }
        
    }

}

module.exports = {Movie}