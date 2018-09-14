class CollatzConjecture {

   steps(num){
    let counter = 0;
    
    if (num === 1) {
      return counter;
    } else if(num < 1) {
      throw new Error('Only positive numbers are allowed');
    }
    
    
    else  {

    while (num > 1) {
      if (num % 2 === 0) {
        num = num / 2;
        counter++
      } else {
        num = (3 * num) + 1;
        counter++
      }
    }
  }
  return counter;
  }

}




export default CollatzConjecture;




