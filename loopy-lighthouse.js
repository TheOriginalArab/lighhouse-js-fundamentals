const loopyLighthouse = function (range, multiples, words) {
  const [start, end] = range;
  const [multi1, multi2] = multiples;
  const [word1, word2] = words;

  for (let i = start; i <= end; i++) {
    if (i % multi1 === 0 && i % multi2 === 0) {
      console.log(word1 + word2);
    } else if (i % multi1 === 0) {
      console.log(word1);
    } else if (i % multi2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
