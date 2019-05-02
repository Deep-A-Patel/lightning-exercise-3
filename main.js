console.log("hey what up");

//Lightning Exercise: Write a function that will accept any string and return the number of vowels. Start with simple console logs.

function vowel_count(string) {
  let vowel_list = "aeiouAEIOU";
  let vcount = 0;

  for (let x = 0; x < string.length; x++) {
    if (vowel_list.indexOf(string[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("Finally got a job in NASA"));
