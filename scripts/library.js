/* eslint-disable no-const-assign */
import Book from './book.js';
import { getLibraryFromLocalStorage } from './helper.js';

const defaultData = [
  new Book(
    'Fight club',
    'Chuck Palahniuk',
    'psychology',
    128,
    0,
    'https://m.media-amazon.com/images/I/51bWdqK-BEL.jpg',
    false,
    false,
  ),

  new Book(
    '1Q84',
    'Haruki Murakami',
    ' Parallel universes in fiction,Fiction',
    442,
    0,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL',
    true,
    true,
  ),

  new Book(
    'Tales Of Power',
    'Carlos Castaneda',
    'Philosophy',
    442,
    0,
    'https://images-na.ssl-images-amazon.com/images/I/51hyItMiC8L._SX329_BO1,204,203,200_.jpg',
    true,
    true,
  ),
];


let myLibrary = [];

if (!localStorage.getItem('myLibrary')) {
  localStorage.setItem('myLibrary', JSON.stringify(defaultData));
  defaultData.forEach((e) => {
    myLibrary.push(e);
  });
} else {
  myLibrary = getLibraryFromLocalStorage();
}


export default myLibrary;
