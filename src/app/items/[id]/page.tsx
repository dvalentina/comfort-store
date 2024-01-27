function ItemPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Item #{id}</div>;
}

export default ItemPage;
