import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../components/context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const listOfCategories = Object.keys(categoriesMap);
  // transforms the object into a list of keys

  const renderCategoriesMap = () => {
    return listOfCategories.map((title) => {
      const products = categoriesMap[title];

      return <CategoryPreview key={title} title={title} products={products} />;
    });
  };

  return <>{renderCategoriesMap()}</>;
};

export default CategoriesPreview;
