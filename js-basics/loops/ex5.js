const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};

for (const key in dictionary) {
    console.log(`Words that begin with ${key}:`);
    const words = dictionary[key];
    for (const word of words) {
        console.log(` ${word}`);
    }
}