const  sum = require("./sum");

test("Add 1 + 2 equal to 3",()=>{
  expect(sum(1,2)).toBe(4);
})
