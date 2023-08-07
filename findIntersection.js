function FindIntersection(strArr) { 

  // code goes here  
  let arr1 = strArr[0].split(',').map(val => Number(val));
  let arr2 = strArr[1].split(',').map(val => Number(val));
  let intersection = [];

  intersection = arr1.filter(val => arr2.indexOf(val) >= 0);

  
  return intersection.length > 0 ? intersection : "false"; 
}
   
// keep this function call here 
console.log(FindIntersection(readline()));
