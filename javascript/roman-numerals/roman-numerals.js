function toRoman(number){
    let result = "";

    let numMap = [
        { limit: 1000, value: "M" },
        { limit: 900, value: "CM" },
        { limit: 500, value: "D" },
        { limit: 400, value: "CD" },
        { limit: 100, value: "C" },
        { limit: 90, value: "XC" },
        { limit: 50, value: "L" },
        { limit: 40, value: "XL" },
        { limit: 10, value: "X" },
        { limit: 9, value: "IX" },
        { limit: 5, value: "V" },
        { limit: 4, value: "IV" },
        { limit: 1, value: "I" }
      ];

      for(let i=0;i<numMap.length;i++)
      {
          let value = numMap[i].value;
          let limit = numMap[i].limit;
          while(number >= limit)
          {
              result+= value;
              number-= limit;
          }
      }

      return result;
    
}

export default toRoman;