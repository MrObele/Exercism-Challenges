  class Squares {
    constructor(num) {
      this.num = num;
    }
     

    
  }

  Squares.prototype.squareOfSum = function() {
    let squareOfSumArray = [];
    for (let i = 1; i <= this.num; i++) {
    squareOfSumArray.push(i);
    }
    return Math.pow(squareOfSumArray.reduce((a, b) => a + b, 0), 2);
  }

  Squares.prototype.sumOfSquares = function() {
    let sumOfSquaresArray = [];
    for (let i = 1; i <= this.num; i++) {
      sumOfSquaresArray.push(i * i);
    }

    return sumOfSquaresArray.reduce((a, b) => a + b, 0);
  }

  Squares.prototype.difference = function() {
     return this.squareOfSum() - this.sumOfSquares();
  }
  


export default Squares;

let squares5 = new Squares(100);

console.log(squares5.sumOfSquares());

console.log(squares5.squareOfSum());

console.log(squares5.difference());


