import { Fragment, useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../components/context/categories.context";

import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const listOfCategories = Object.keys(categoriesMap);
  // transforms the object into a list of keys

  const renderCategoriesMap = () => {
    return listOfCategories.map((title) => {
      const products = categoriesMap[title];

      return (
        <div>
          <CategoryPreview key={title} title={title} products={products} />
        </div>
      );
    });
  };

  return <div className="shop-container">{renderCategoriesMap()}</div>;
};

export default Shop;
