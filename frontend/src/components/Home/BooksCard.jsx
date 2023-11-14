/* eslint-disable react/prop-types */

import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-4">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book}></BookSingleCard>
      ))}
    </div>
  );
};

export default BooksCard;
