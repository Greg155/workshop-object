let wilder = {
    name : "Greg",
    city : "Brussels",
    age : 27,
    isLearningJs : true
}

Object.keys(wilder).includes("name") ? console.log("Name exist") : console.log("Name doesn't exist");
Object.keys(wilder) .includes("isLearningJs") ? console.log("isLearningJs exist") : console.log("isLearningJs doesn't exist");
Object.keys(wilder) .includes("isLearningPhp") ? console.log("isLearningPhp exist") : console.log("isLearningPhp doesn't exist");

wilder.knowsHTML = true 
wilder.lastName = "Akhun";

for(let key in wilder){
    console.log(key,wilder[key]);
}