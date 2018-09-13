class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(matchingArray) {
    

let newWord = this.word.split('').sort().join('');

    return matchingArray.filter(function(item){
      return (item.split('').sort().join('') === newWord);
    })

  }
}


export default Anagram;