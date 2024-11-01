import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Booklist from "./components/Booklist";
import Aside from "./components/Aside";

function App() {
  const [count, setCount] = useState(0);
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

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
      <Main films={films} />
      <Booklist books={books} />
      <Aside />
    </>
  );
}

export default App;
