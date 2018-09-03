
class Transcriptor{


toRna(dna){
  let  checkDna = ['C','G','A','T',''];
  if(dna == '')
{
  return '';
}
else{
  let rna = dna.split('').map(function(item){
        if(item == 'C'){
          return 'G';
        }else if(item == 'G'){
          return 'C';
        }else if(item == 'A'){
          return 'U';
        }else if(item == 'T'){
          return 'A';
        }else{
          throw 'Invalid input DNA.'
        }
  });
}

	return rna.join('');
}
}

export default Transcriptor;