function TreeConstructor(strArr) {
    let tree = {};

    strArr.forEach(str => {
        let [i1, i2] = str.replace("(", "").replace(")", "").split(',');

        if (!tree[i2]) {
            tree[i2] = [i1];
        }
        else {
            tree[i2].push(i1);
        }
    })

    let total_nodes = 0;
    let unique_numbers = [];
    for (let keys in tree) {
        total_nodes++;
        //   check for binary links
        if (tree[keys].length > 2) return "false";
        //   check for unique numbers
        let exist = false;
        tree[keys].forEach(val => {
            if (unique_numbers.indexOf(Number(val)) >= 0) exist = true;
            else unique_numbers.push(Number(val));
        })
        if (exist) return "false";
    }

    // check for seperate nodes error
    let linking_nodes = 0;
    for (let n_keys in tree) {

        for (let nn_keys in tree) {
            if (tree[n_keys] == tree[nn_keys]) continue;
            else {
                let tree_val = Number(n_keys);
                tree[nn_keys].forEach(val => {
                    if (Number(val) === tree_val) linking_nodes++;
                })
            }
        }
    }

    if (linking_nodes < total_nodes - 1) return "false";


    // code goes here  
    return "true";
    //   return strArr; 

}

// keep this function call here 
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]))
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]))
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]))
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)", "(3,2)", "(5,4)", "(6,4)"])); // Output: "false"
console.log(TreeConstructor(["(1,2)", "(1,3)", "(3,4)", "(4,5)"])); // Output: "false"
console.log(TreeConstructor(["(1,2)", "(2,3)", "(3,4)", "(4,5)", "(6,3)"])); // Output: "true"
console.log(TreeConstructor(["(1,2)", "(1,3)", "(1,4)", "(2,5)", "(2,6)", "(3,7)", "(4,8)"])); // Output: "false"
console.log(TreeConstructor(["(1,2)", "(2,3)", "(2,4)", "(3,5)", "(4,6)", "(4,7)", "(7,8)"])); // Output: "false"
console.log(TreeConstructor(["(1,2)", "(1,3)", "(1,4)", "(1,5)"])); // Output: "false"

console.log(TreeConstructor(["(1,2)", "(3,4)", "(5,6)"])) // false