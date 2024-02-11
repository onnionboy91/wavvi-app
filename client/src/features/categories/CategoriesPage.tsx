import { RootState } from '../../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const CategoriesPage = (): JSX.Element => {

    const categories = useSelector((store: RootState) => store.categories.categories)
    
  return (
    <>
    {categories.map((category) => (
        <CategoryCard key={category.id} category={category}/>
    ))}
    </>
  )
}

export default CategoriesPage