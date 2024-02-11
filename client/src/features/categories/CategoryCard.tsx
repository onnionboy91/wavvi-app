import React from 'react'
import { Category } from './types'
import { Link } from 'react-router-dom'
import { removeCategory } from './categoriesSlice'
import { useAppDispatch } from '../../redux/store'
import FormAddComment from '../comments/FormAddComment'


const CategoryCard = ({category}: {category: Category}): JSX.Element => {

const dispatch = useAppDispatch()

  return (
    <>
    <div className="card" style={{margin: '50px'}} >
  <img src={category.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{category.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="btn btn-primary" to={`/categories/${category.id}`}>More information</Link>
    <button className="btn btn-danger" onClick={() => dispatch(removeCategory(category.id))} type='button'>Удалить</button>
  </div>
</div>
<FormAddComment/>
</>
  )
}

export default CategoryCard