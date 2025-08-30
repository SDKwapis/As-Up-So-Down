function asUpSoDown(numbers) {
  const num = numbers.split("");
  //console.log(num);
  const newNum = [];
  for (let i = 0; i < num.length; i++) {
    const currentValue = num[i];
    if (currentValue == 6) {
      newNum.push(9);
    } else if (currentValue == 9) {
      newNum.push(6);
    } else {
      newNum.push(0);
    }
  }
  //console.log(newNum);
  const numCompare = newNum.reverse();
  const numCompareString = numCompare.join("");
  //console.log(numCompare)
  console.log(numCompareString);
  console.log(numbers);
  if (numCompareString == numbers) {
    console.log("true");
  } else {
    console.log("false");
  }
}
asUpSoDown("690690");
asUpSoDown("6090609");
