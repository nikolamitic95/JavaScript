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
// var culinaryRecipe = function (ime, vrsta, slozenost, sastojci, vreme, uputstvo){
//     return {
//         ime: ime,
//         vrsta: vrsta,
//         slozenost: slozenost,
//         sastojci : sastojci,
//         vreme: vreme,
//         uputstvo: uputstvo,
//         sviSastojci: function (){
//             console.log(this.sastojci);
//         },
//         priprema15min: function(){
//            if(vreme <= 15){
//                return true;
//            }
//                return false;
//         },
        
// }
// }


// var newRecipe = culinaryRecipe("pasulj", "srpska", 3, ["pasulj", "crni luk", "so", "paprika","slanina", "persun"], 60, "kuvati duze");

// console.log(newRecipe.sviSastojci());
// console.log(newRecipe.priprema15min());