function buyFruit(list) {
  const fruits = [];

  for (let idx = 0; idx < list.length; idx += 1) {
    for (let idx2 = 0; idx2 < list[idx][1]; idx2 += 1) {
      fruits.push(list[idx][0]);
    }
  }

  return fruits;
}

// alternative approach
function buyFruit2(list) {
  return list.map(fruit => repeat(fruit))
             .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]