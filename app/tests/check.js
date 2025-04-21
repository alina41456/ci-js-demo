function sum(a, b) {
  return a + b;
}

function testSum() {
  if (sum(2, 3) !== 5) {
    throw new Error("sum(2, 3) should be 5");
  }
}

testSum();
console.log("Test passed");
