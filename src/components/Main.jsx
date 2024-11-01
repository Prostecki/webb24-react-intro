function Main(props) {
  return (
    <>
      <ol>
        {props.films.map((film, index) => (
          <li className="start-text" key={index}>
            {film}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Main;
