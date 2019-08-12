import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const books = useContext(BookContext);

  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book, index) => {
          return (
            <li style={{ background: theme.ui }} key={index}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
