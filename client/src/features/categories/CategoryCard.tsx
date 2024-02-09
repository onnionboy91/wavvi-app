import React from 'react'
import { Category } from './types'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}: {category: Category}): JSX.Element => {
  return (
    <>
    <div className="card" style={{margin: '50px'}} >
  <img src={category.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{category.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" >Подробнее</a>
    <Link className="btn btn-primary" to={`/categories/${category.id}`}>More information</Link>
  </div>
</div>
</>
  )
}

export default CategoryCard