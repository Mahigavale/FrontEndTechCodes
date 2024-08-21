let Numbers = [1, 2, 3, 4, 5, 6];
//[10,20,30,40,50,60] => *10=>[]

function Multiplier(Variable) {
    //logic =>each and every element.
  return Variable * 10;
}

//Numbers.forEach(Multiplier);
const numbers2 = Numbers.map(Multiplier);
console.log(numbers2);
