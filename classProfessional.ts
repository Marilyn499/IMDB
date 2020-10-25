class Professional 
{
    public name: string;
    public age: string;
    public genre: string;
    public weightKg: number;
    public heightCm: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor (name: string, age: string, genre: string, weightKg: number, heightCm: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weightKg = weightKg;
        this.heightCm = heightCm;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
 
    }
    
    public toStringProfessional (): string
    {

        return "Name: " + this.name + "\n" +"Age: " + this.age + "\n" +"Genre: " + this.genre + "\n" + "Weight (kg): " + this.weightKg + "\n" + "Height: " + this.heightCm + "\n" + "Hair color: " + this.hairColor + "\n" +"Eye color: " + this.eyeColor + "\n" +"Race: " + this.race + "\n" + "Is retired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Oscar's number: " + this.oscarsNumber + "\n" +"Profession: " + this.profession + "\n";
    }

}

module.exports = {Professional}