let arr = [
  { id: 1, price: 12 },
  { id: 2, price: 45 },
  { id: 3, price: 23 },
];

let c = arr.reduce((acc, l) => acc + l.price, 0);
console.log(c);
