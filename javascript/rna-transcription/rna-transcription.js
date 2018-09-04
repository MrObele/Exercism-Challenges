class Transcriptor {
  toRna(dna) {
   
    const dnaMap = {
      C : 'G',
      G : 'C',
      A : 'U',
      T : 'A'

    };

    const rna = [];
    const dnaArray = dna.split('');

    for (let i = 0; i < dnaArray.length; i++) {
      if (!dnaMap[dnaArray[i]]) {
        throw new Error('Invalid input DNA.')
      } else {
        rna[i] = dnaMap[dnaArray[i]];
      }
    } 
    return rna.join('');
  } 
  
}

export default Transcriptor;