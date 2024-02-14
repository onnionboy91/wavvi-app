import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';
import './styles/styles.css';

const CategoriesPage = (): JSX.Element => {
  const categories = useSelector((store: RootState) => store.categories.categories);

  return (
    <>
      <div className="cards-categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoriesPage;
