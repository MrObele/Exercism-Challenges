class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(matchingArray) {
    let output = [];
    let wordArray = this.word.split('').sort();

    for (let i = 0; i < matchingArray.length; i++) {
      if (matchingArray[i].split('').sort() == wordArray) {
        output.push(matchingArray[i]);
        return output;

      return matchingArray[i].split('').sort();
     
      }
    }
    return output;
    


  }
}

const ls = new Anagram('anna')

console.log(ls.matches('nana'));

export default Anagram;