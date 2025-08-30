function asUpSoDown(numbers) {
  const num = numbers.split("");
  console.log(num);
 for (let i = 0; i <= num.length; i++) {
  const currentValue = num[i];
  const newNum = [];
   if (currentValue == 6) {
     newNum.push(9);
     console.log(newNum);
   } else if (currentValue == 9) {
     newNum.push(6)
   } else {
     newNum.push(0);
   }
   console.log(newNum);
 }} 
asUpSoDown("690690")