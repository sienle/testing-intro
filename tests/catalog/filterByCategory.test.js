const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  const allIds = [1, 2, 3, 4, 5, 6];

  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, 'all').map(item => item.id)).toEqual(allIds);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products).map(item => item.id)).toEqual(allIds);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, '').map(item => item.id)).toEqual(allIds);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(filterByCategory(products, 'electronics').map(item => item.id)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(filterByCategory(products, 'books').map(item => item.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(filterByCategory(products, 'home').map(item => item.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes').map(item => item.id)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys').map(item => item.id)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports').map(item => item.id)).toEqual([]);
  });
});
