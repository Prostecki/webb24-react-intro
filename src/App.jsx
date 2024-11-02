import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Booklist from "./components/Booklist";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import UserGreetings from "./components/UserGreetings";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      name: "lol",
      price: 123,
    },
    { name: "lolkek", price: 1334 },
  ];
  const films = ["batman", "spider-man", "superman", "witcher", "something"];
  const books = [
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian",
      description:
        "A novel about a totalitarian regime that uses surveillance and control to maintain power.",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      description:
        "A story of racial injustice and moral growth in the American South.",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Tragedy",
      description:
        "A critique of the American Dream set in the Roaring Twenties.",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
      description:
        "The narrative of Captain Ahab's obsessive quest to hunt the giant white whale.",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      description:
        "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    },
  ];
  const text = "All rights reserved, 2024";
  const name = "Mark";

  return (
    <>
      <ProductList products={productList} />
      <Header />
      <Main films={films} />
      <Booklist books={books} />
      <Aside />
      <UserGreetings greetings={name} />
      <Footer byebye={text} />
    </>
  );
}

export default App;
