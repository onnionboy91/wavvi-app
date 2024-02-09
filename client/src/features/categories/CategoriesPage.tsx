import { RootState } from '@reduxjs/toolkit/query'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const CategoriesPage = (): JSX.Element => {

    const categories = useSelector((store: RootState) => store.categories.categories)

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