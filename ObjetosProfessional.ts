//const { Professional } = require("./classProfessional");
//var myLib = require ("./classProfessional");

import {Professional} from "./classProfessional"



let Actor1:Professional = new Professional ("Joaquin Phoenix", 45, "Male", 81, 173, "Dark Brown", "Green", "Caucasian", false, "American", 1, "Actor");
let Actor2:Professional = new Professional ("Rami Malek", 39, "Male", 70, 170, "Black", "Green", "Egyptian", false, "American", 1, "Actor");
let Actor3:Professional = new Professional ("Gary Oldman", 62, "Male", 72, 174, "Light Brown", "Blue", "Caucasian", false, "English", 1, "Actor");
let Actor4:Professional = new Professional ("Katherine Hepburn †", 96, "Female", 64, 172, "dark brown/grey", "Blue", "Caucasian", true, "American", 4, "Actress");




console.log(Actor1.toStringProfessional());
console.log(Actor2.toStringProfessional());
console.log(Actor3.toStringProfessional());
console.log(Actor4.toStringProfessional());
