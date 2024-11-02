function Header() {
  const person = {
    name: "Mark",
    surname: "Taratynov",
  };
  const { name, surname } = person;
  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{surname}</h2>
    </header>
  );
}

export default Header;
