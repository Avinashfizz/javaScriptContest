const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0; i<data.length; i++){
    if(data[i].profession=="developer"){
      console.log(data[i].name);
    }
  }
}

// 2. Add Data
function addData() {

}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0; i<data.length; i++){
    if(data[i].profession==="admin"){
      data.splice(i, 1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
 
  let dummyArr =[];
  dummyArr.concat(data);

  console.log(dummyArr);
}

// 5. Average Age
function averageAge() {
let avg = 0;
let sum = 0;
  for(let i=0; i<data.length; i++){
      sum+=data[i].age;
  }
      avg =sum/data.length;
}

// 6. Age Check
function checkAgeAbove25() {

  let AgeAbove=false;
  for(let i=0; i<data.length; i++){
    if(data[i].age>25){
      AgeAbove = true;
    }
  }
  console.log(AgeAbove);
}

// 7. Unique Professions
function uniqueProfessions() {
  let count = 0;
  let obj = {


  }
  for(let i=0; i<data.length; i++){


     if(!obj[data[i].profession]){
       obj[data[i].profession] = true;
       count++;
     }
     
  }
  console.log(count);
}

// 8. Sort by Age
function sortByAge() {

  data.sort((a, b) => {
    return a.age-b.age;
  })

  for(let i=0; i<data.length; i++){
    console.log(data[i]);
  }

}

// 9. Update Profession
function updateJohnsProfession() {

  for(let i=0; i<data.length; i++){
    if(data[i].name == "john"){
      data[i].profession = 'manager';
    }
  }

}

// 10. Profession Count
function getTotalProfessions() {
 
  let countOfDovelopers = 0;
  let countOfAdmin = 0;
  for(let i=0; i<data.length; i++){
      if(data[i].profession=="developer")countOfDovelopers++;
      else countOfAdmin++;
  }

  console.log(countOfDovelopers);
  console.log(countOfAdmin);

}
