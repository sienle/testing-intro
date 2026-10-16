const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары с 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, "asc").map((item) => item.id)).toEqual(
      [3, 6, 5, 4, 2, 1],
    );
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products).map((item) => item.id)).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });

  test("товары [1, 3, 4] с 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter((item) =>
      [1, 3, 4].includes(item.id),
    );

    expect(
      sortProductsByPrice(selectedProducts, "asc").map((item) => item.id),
    ).toEqual([3, 4, 1]);
  });

  test("все товары с 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(
      sortProductsByPrice(products, "desc").map((item) => item.id),
    ).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] с 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = products.filter((item) =>
      [3, 1, 4].includes(item.id),
    );

    expect(
      sortProductsByPrice(selectedProducts, "desc").map((item) => item.id),
    ).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] с 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = products.filter((item) =>
      [5, 2, 6].includes(item.id),
    );

    expect(
      sortProductsByPrice(selectedProducts, "desc").map((item) => item.id),
    ).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((item) =>
      [1, 3, 4].includes(item.id),
    );
    const originalIds = selectedProducts.map((item) => item.id);
    sortProductsByPrice(selectedProducts, "asc");
    expect(selectedProducts.map((item) => item.id)).toEqual(originalIds);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((item) =>
      [1, 3, 4].includes(item.id),
    );
    const originalIds = selectedProducts.map((item) => item.id);
    sortProductsByPrice(selectedProducts, "asc");
    expect(selectedProducts.map((item) => item.id)).toEqual(originalIds);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const originalIds = products.map((item) => item.id);
    sortProductsByPrice(products);
    expect(products.map((item) => item.id)).toEqual(originalIds);
  });
});
