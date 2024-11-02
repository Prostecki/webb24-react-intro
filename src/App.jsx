import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Booklist from "./components/Booklist";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import UserGreetings from "./components/UserGreetings";
import ProductList from "./components/ProductList";
import ProfileCard from "./components/ProfileCard";
import {
  productList,
  films,
  books,
  text,
  profileCard,
  myTrollName,
  // profileCard,
} from "./Data";

function App() {
  return (
    <>
      <ProductList products={productList} />
      <ProfileCard profileCard={profileCard} />
      <Header />
      <Main films={films} />
      <Booklist books={books} />
      <Aside />
      <UserGreetings myName={myTrollName} />
      <Footer byebye={text} />
    </>
  );
}

export default App;
