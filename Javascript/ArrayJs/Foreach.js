let numbers = [12, 24, 36, 48];

//function as an argument
//applies the function logic to each element seperately.

//function logic
//iterator 
//takes each element individually.
//USeful.
//can't return anything
function Demo(V) {
  console.log(V * 2);
}

numbers.forEach(Demo);
