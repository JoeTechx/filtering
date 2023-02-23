import { useState } from "react";
import Data from "./Data";

const Category = () => {
  const [products, setProducts] = useState(Data);

  const filterCategory = (categoryItem) => {
    const result = Data.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    });
    setProducts(result);
  };
  return (
    <div className="category">
      <div className="row">
        <div className="col">
          <h4 className="title">Filter by Category</h4>
          <div className="btns">
            <button onClick={() => setProducts(Data)}>All</button>
            <button onClick={() => filterCategory("Men")}>Men</button>
            <button onClick={() => filterCategory("Women")}>Women</button>
            <button onClick={() => filterCategory("Kids")}>Kids</button>
          </div>
        </div>

        <div className="col">
          <h4 className="title">Product Page</h4>
          <div className="cards">
            {products.map((product) => (
              <div className="card">
                <div className="card__header">
                  <img src={`./images/${product.image}`} alt="" />
                </div>
                <div className="card__body">
                  <h2 className="title__product">{product.name}</h2>
                  <span className="price__product">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
