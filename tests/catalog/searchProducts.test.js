const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  const allIds = [1, 2, 3, 4, 5, 6];

  test("'Наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, "Наушники").map((item) => item.id)).toEqual(
      [1],
    );
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(
      searchProducts(products, "Чистый код").map((item) => item.id),
    ).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(
      searchProducts(products, "Настольная лампа").map((item) => item.id),
    ).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    expect(
      searchProducts(products, "javascript").map((item) => item.id),
    ).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(searchProducts(products, "ЧЕХОЛ").map((item) => item.id)).toEqual([
      5,
    ]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, "наушники").map((item) => item.id)).toEqual(
      [1],
    );
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "").map((item) => item.id)).toEqual(allIds);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "   ").map((item) => item.id)).toEqual(
      allIds,
    );
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "\t\n").map((item) => item.id)).toEqual(
      allIds,
    );
  });
});
