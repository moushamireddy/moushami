let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'typescript'];
//  no type safety in our tuple for indexes 3+
ourTuple.push('javascript');
ourTuple.push(999)
console.log(ourTuple);