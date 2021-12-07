function palindrome(str) {
  str = str.replace(/[\W+_]/g, "").toLowerCase();
  let arr = str.split("");
  while (arr.length>1) {
    if (arr.shift()==arr.pop()) {
      arr.shift();
      arr.pop();
    } else {
      return false;
    }
  };
  return true;
}

console.log(palindrome("five|\_/|four")); // false
