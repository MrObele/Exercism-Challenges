class Hamming{

	compute(strandA, strandB){
		let counter = 0;
		if(strandA.length != strandB.length){
			throw new  Error('left and right strands must be of equal length');
		}else{
			for(let i=0; i<strandA.length; i++){
				if(strandA[i]!= strandB[i]){
					counter+= 1;
				}
			}

		}
		return counter;
	}
}

export default Hamming;