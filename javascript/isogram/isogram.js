class Isogram {
	constructor(userInput){
		this.word = userInput.toLowerCase().replace(/[^\w]/g, '');
	}

	isIsogram(){
	  let counter = 0;

	  for(let i=0; i<this.word.length;i++){
	  	for(let j = 0; j<this.word.length;j++){
	  		if(word[i] == word[j]){
	  			counter+= 1;
	  		}
	  	}
	  	 if(counter >1){
	  	 	return false;
	  	 }else{
	  	 	counter= 0;
	  	 }
	  }
	  return true
	 	
	}
}

export default Isogram;