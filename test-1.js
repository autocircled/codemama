const input = "7\n4 5 6 3 1 2 0"
const [arraySize, data] = input.trim().split("\n")
const dataArray = data.trim().split(" ").map(el => parseInt(el))
if(dataArray.length === parseInt(arraySize)){
    if(hasDuplicates3(dataArray)){
        console.log("false")
    }else {
        // array sort
        const sortedData = dataArray.slice().sort((a, b) => a - b);
      if(isIncrementalByOne(sortedData)){
        console.log("true")
      } else {
        console.log("false")
      }
    }
}else{
    console.log("false")
}
// Using Set
function hasDuplicates1(array) {
  return new Set(array).size !== array.length;
}

// Using indexOf
function hasDuplicates2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return true;
    }
  }
  return false;
}

// Using a Hash Map
function hasDuplicates3(array) {
  const map = {};
  for (const element of array) {
    if (map[element]) {
      return true;
    }
    map[element] = true;
  }
  return false;
}

function isIncrementalByOne(array) {
  return array.every((value, index) => index === 0 || value === array[index - 1] + 1);
}