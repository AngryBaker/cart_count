import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';

const album1 = new MusicAlbum(1, "smiyagl", "tyler", 200);
const album2 = new MusicAlbum(2, "Goblin", "tyler", 300);  
const album3 = new MusicAlbum(3, "Flower Boy", "tyler", 250); 

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('new card should calc price', () => {
  const cart = new Cart();
  cart.add(album1);
  cart.add(album2);
  cart.add(album3);
  

  expect(cart.priceCounter()).toBe(750);
});

test('new card should calc price with discount', () => {
  const cart = new Cart();
  cart.add(album1);
  cart.add(album2);
  cart.add(album3);

  expect(cart.priceWithDiscountCounter(10)).toBe(675);
});

test('new card should delete product', () => {
  const cart = new Cart();
  cart.add(album1);
  cart.add(album2);
  cart.add(album3);
  cart.deleteProductWithId(3)

  expect(cart.items.length).toBe(2);
});
