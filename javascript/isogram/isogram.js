class Isogram {
	constructor(userInput){
		this.word = userInput.toLowerCase().replace(/[^\w]/g, '');
	}

	isIsogram(){
 
	  let checker = 0;
      let counter = 0;
      if(this.word === ""){
      	return true;
      }
	  for(let i = 0; i<this.word.length;i++){
	  	counter = 0;
	  	for(let j = 0; j<this.word.length;j++){
	  		if(this.word[i] === this.word[j]){
	  			counter+= 1;
	  		}
	  	}
	  	 if(counter >1){
	  	 	checker+= 1;
	  	 }
	  }
	  if(checker === 0 ){
	  	return true;
	  }
	  	return false;
	}
}

export default Isogram;