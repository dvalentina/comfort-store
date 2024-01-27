function APIHome() {
  return (
    <>
      <h1>Comfort Store API</h1>
      <h3>Available routes:</h3>
      <ul>
        <li>
          <a href='api/items'>/api/items</a>
        </li>
        <li>
          <a href='api/items/1'>/api/items/:id</a>
        </li>
      </ul>
    </>
  );
}

export default APIHome;
