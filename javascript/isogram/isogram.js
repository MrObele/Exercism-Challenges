class Isogram {
  constructor(userInput) {
    this.word = userInput.toLowerCase().replace(/[^\w]/g, "");
  }

  isIsogram() {
    let sentence = this.word.split("").sort();
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] == sentence[i + 1]) return false;
    }
    return true;
  }
}

export default Isogram;

// isIsogram(){

// 	let checker = 0;
// 		let counter = 0;
// 		if(this.word === ""){
// 			return true;
// 		}
// 	for(let i = 0; i<this.word.length;i++){
// 		counter = 0;
// 		for(let j = 0; j<this.word.length;j++){
// 			if(this.word[i] === this.word[j]){
// 				counter+= 1;
// 			}
// 		}
// 		 if(counter >1){
// 			 checker+= 1;
// 		 }
// 	}
// 	if(checker === 0 ){
// 		return true;
// 	}
// 		return false;
// }
