const romanToInt = function (s) {
  let romanMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  
  let sum = 0;

   for (let i =0; i< s.length; i++){
    if (romanMap[s[i+1]] > romanMap[s[i]]){
      sum -= romanMap[s[i]];
    } else {
      sum += romanMap[s[i]];
    }
  }
  return sum;
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
