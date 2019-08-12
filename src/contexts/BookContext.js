import React, { createContext, useState } from 'react';
import ThemeContextProvider from './ThemeContext';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([{ title: 'a' }, { title: 'b' }]);
  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
