import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../components/context/products.context";

import "./shop.styles.scss";

import PRODUCTS from "../../shop_data.json";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products_container">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
