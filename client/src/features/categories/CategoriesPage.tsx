import { RootState } from '../../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const CategoriesPage = (): JSX.Element => {

    const categories = useSelector((store: RootState) => store.categories.categories)
// console.log(categories, 11111)
  return (
    <>
    <div>CategoriesPage</div>
    {categories.map((category) => (
        <CategoryCard key={category.id} category={category}/>
    ))}
    </>
  )
}

export default CategoriesPage