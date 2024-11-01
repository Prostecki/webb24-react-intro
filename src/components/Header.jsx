function Header() {
  const person = {
    name: "Mark",
    surname: "Taratynov",
  };
  const { name, surname } = person;
  return (
    <>
      <h1>{name}</h1>
      <h2>{surname}</h2>
    </>
  );
}

export default Header;
