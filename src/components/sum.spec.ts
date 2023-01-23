import { sum } from "./sum";

it("suming 5 and 2 will return 7", () => {
  //para testear que ts funcione
  /*  const a: string = 5;
 expect(a).toBe(5); */

  expect(sum(5, 2)).toBe(7);
});
