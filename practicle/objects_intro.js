/****   1    ****/

// var coffee = {
//     name: "espresso",
//     strength: 5,
//     milk: 1,
//     sugar: 2
// }

// console.log(typeof coffee.milk);

/****   2    ****/

// var movie = {
//     title: "Snatch",
//     actors: ["Brad Pitt", "Vinnie Jones", "Benicio Del Toro"],
//     director: "Guy Ritchie",
//     genre: "Action"
// }
// console.log(movie.actors[1]);

/****   3    ****/

// var createProjectObject = function (description, progLang, gitRep, status) {
//     return {
//         description: description,
//         progLang: progLang,
//         gitRep: gitRep,
//         status: status,
//         getRepository: function () {
//             console.log(this.gitRep);
//         },
//         isJS: function () {
//             if (progLang === "JavaScript") {
//                 return true;
//             }
//             return false;
//         },
//         isFinish: function () {
//             if (status) {
//                 return "Finished";
//             }
//             return "It is in development"
//         }
//     }
// }

// var newProject = createProjectObject("2020 Web Project", "JavaScript", "bit-web", false);

// newProject.getRepository();
// console.log(newProject.isJS());
// console.log(newProject.isFinish());
// console.log(newProject.description);


/****   4    ****/

// var culinaryRecipe = function (ime, vrsta, slozenost, sastojci, vreme, uputstvo) {
//     return {
//         ime: ime,
//         vrsta: vrsta,
//         slozenost: slozenost,
//         sastojci: sastojci,
//         vreme: vreme,
//         uputstvo: uputstvo,
//         sviSastojci: function () {
//             return this.sastojci;
//         },
//         priprema15min: function () {
//             if (this.vreme <= 15) {
//                 return "Moze da se spremi za 15 min";
//             }
//             else {
//                 return "Ne moze da se spremi za 15 min";
//             }
//         },
//         novaKuhinja: function (vrsta1) {
//             return this.vrsta = vrsta1;
//         },
//         brisanjeSastojka: function (sas) {
//             var noviSastojci = [];
//             for (var i = 0; i < this.sastojci.length; i++) {
//                 if (sastojci[i] !== sas) {
//                     noviSastojci[noviSastojci.length] = sastojci[i];
//                 }
//             }
//             return noviSastojci;
//         },
//     }
// }
// var newRecipe = culinaryRecipe("pasulj", "srpska", 3, ["pasulj", "crni luk", "so", "paprika", "slanina", "persun"], 60, "kuvati duze");
// console.log(newRecipe.sviSastojci());
// console.log(newRecipe.priprema15min());
// console.log(newRecipe.novaKuhinja("italija"));
// console.log(newRecipe.brisanjeSastojka("so"));


/*******   3 drugi nacin konstruktorska f-ja   *****/

// function createProjectObject(description, progLang, gitRep, status) {
//     this.description = description;
//     this.progLang = progLang;
//     this.gitRep = gitRep;
//     this.status = status;
//     this.getRepository = function () {
//         return this.gitRep;
//     },
//         this.isJS = function () {
//             if (progLang === "JavaScript") {
//                 return true;
//             }
//             return false;
//         },
//         this.isFinish = function () {
//             if (status) {
//                 return "Finished";
//             }
//             return "It is in development";
//         }

// }

// var newProject = new createProjectObject("2020 Web Project", "JavaScript", "bit-web", false);


// console.log(newProject);
// console.log(newProject.getRepository());
// console.log(newProject.isJS());
// console.log(newProject.isFinish());
