function ProductList(props) {
  return (
    <>
      {props.products.map((product, index) => (
        //key = mandatory to add, because REACT want to know how it works with every elements
        // It works with adding index into array, or you have to have id attribute into array as well
        <div key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default ProductList;
