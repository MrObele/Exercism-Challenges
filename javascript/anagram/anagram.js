class Anagram {
  constructor(word) {

    this.word = word.toLowerCase();
  }
   

  matches(inputArray) {
    let output = [];
    

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].toLowerCase() == this.word) {

      } else if (inputArray[i].toLowerCase().split('').sort().join('') == this.word.split('').sort().join('')) {
        output.push(inputArray[i]);
      }
    }
    return output;
  }

}
// let arr = ['enlists', 'google', 'inlets', 'banana'];
// let tester = 'listen'
// const test = new Anagram(tester);


// console.log(test.matches(arr));

export default Anagram;