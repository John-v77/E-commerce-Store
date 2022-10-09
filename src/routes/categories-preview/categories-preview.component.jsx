import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selectors';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const listOfCategories = Object.keys(categoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  // transforms the object into a list of keys

  const renderCategoriesMap = () => {
    return listOfCategories.map((title) => {
      const products = categoriesMap[title];

      return <CategoryPreview key={title} title={title} products={products} />;
    });
  };

  return <>{isLoading ? <Spinner /> : renderCategoriesMap()}</>;
};

export default CategoriesPreview;
