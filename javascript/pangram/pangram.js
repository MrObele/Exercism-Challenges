

class Pangram {
  constructor(inputSentence) {
    this.inputSentence = inputSentence;
  }

  isPangram() {
    const regex = /[^\w]/g;
  
    let cleanArray = this.inputSentence
      .toLowerCase()
      .replace(regex, "")
      .split("")
      .sort();
    let sample = Array.of(..."abcdefghijklmnopqrstuvwxyz");
  
    for (let i = 0; i < sample.length; i++) {
      if (!cleanArray.includes(sample[i])) {
        return false;
      }
    }
    return true;
  }
  

}

export default Pangram;
