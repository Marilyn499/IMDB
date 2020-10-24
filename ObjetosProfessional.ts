const { Professional } = require("./classProfessional");
var myLib = require ("./classProfessional");





Actor1 = new Professional ("Joaquin Phoenix", 45, "Male", 81, 173, "Dark Brown", "Green", "Caucasian", false, "American", 1, "Actor");
Actor2 = new Professional ("Rami Malek", 39, "Male", 70, 170, "Black", "Green", "Egyptian", false, "American", 1, "Actor");
Actor3 = new Professional ("Gary Oldman", 62, "Male", 72, 174, "Light Brown", "Blue", "Caucasian", false, "English", 1, "Actor");
Actor4 = new Professional ("Katherine Hepburn †", 96, "Female", 64, 172, "dark brown/grey", "Blue", "Caucasian", true, "American", 4, "Actress");




console.log (Actor1.toString());

console.log (Actor2.toString());

console.log (Actor3.toString());

console.log (Actor4.toString());
