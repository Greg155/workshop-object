let wilder = {
    name : "Greg",
    city : "Brussels",
    age : 27,
    isLearningJs : true
}
console.log(wilder);

console.log('name' in wilder);
console.log('isLearningJs' in wilder);
console.log('isLearningPhp' in wilder);

wilder.knowsHTML = true;
wilder.knowsCSS = true;
wilder.hobbies = ["unity","Blender"];

delete wilder.name;
wilder.firstName = "Greg";
wilder.lastName = "Akhun";
console.log(wilder);
