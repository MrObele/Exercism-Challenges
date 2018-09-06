  class Squares {
    constructor(num) {
      this.num = num;
    }
     

    get squareOfSum () {
    let squareOfSumArray = 0;
    for (let i = 1; i <= this.num; i++) {
    squareOfSumArray+= i;
    }
    return Math.pow(squareOfSumArray, 2);
  }



 get sumOfSquares() {
    let sumOfSquaresArray = 0;
    for (let i = 1; i <= this.num; i++) {
      sumOfSquaresArray += Math.pow(i,2);
    }

    return sumOfSquaresArray;
  }


 get ldifference() {
     return this.squareOfSum - this.sumOfSquares;
  }
  

  }
  


export default Squares;



