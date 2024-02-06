function APIHome() {
  return (
    <>
      <h1>Comfort Store API</h1>
      <h3>Available routes:</h3>
      <ul>
        <li>
          <a href='api/products'>/api/products</a>
        </li>
        <li>
          <a href='api/products/1'>/api/products/:id</a>
        </li>
      </ul>
    </>
  );
}

export default APIHome;
