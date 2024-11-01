function Booklist(props) {
  return (
    <div className="books">
      {props.books.map((book) => (
        <div className="one-book" key={book.title}>
          <h1>{book.title}</h1>
          <p>Author {book.author}</p>
          <p>Gengre: {book.genre}</p>
          <p>Description: {book.description}</p>
          <p>Year: {book.year}</p>
        </div>
      ))}
    </div>
  );
}
export default Booklist;
