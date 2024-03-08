import React from 'react'
import Card from './Card'

import fantasy from '../books/fantasy.json'

function AllTheBooks() {
    return (
        <div className="book-list">
          {fantasy.map((book) => (
            <Card key={book.asin} book={book} />
          ))}
        </div>
      );
}

export default AllTheBooks
