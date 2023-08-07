var count = 0;
function isValid(str) {
  let arr = [str[0]];
  str = str.split('');
  str.shift();
  str.forEach(s => {
    if(s === ')' && arr[arr.length - 1] === '(') {
      arr.pop();
    }
    else if(s==='(') {
      arr.push(s);
    }
  })

  return arr.length === 0;
}

function printBrackets(str, left, right, limit) {
  if(left == limit && right == limit) {
    if(isValid(str)) {
    // console.log(str,count);
      count++;
    }
  }
  if(left < limit) {
    printBrackets(str+"(", left+1, right, limit);
  }
  if(right < limit) {
    printBrackets(str+")", left, right+1, limit);
  }
}

function BracketCombinations(num) { 

  // code goes here  
  if(num == 0) return 1;
  count = 0;
  printBrackets("", 0,0,num)
  return count; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));
