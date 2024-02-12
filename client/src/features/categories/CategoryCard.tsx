import React from 'react'
import { Category } from './types'
import { Link } from 'react-router-dom'
import { removeCategory } from './categoriesSlice'
import { useAppDispatch } from '../../redux/store'
// import FormAddComment from '../comments/FormAddComment'
import './styles/styles.css'


const CategoryCard = ({category}: {category: Category}): JSX.Element => {

const dispatch = useAppDispatch()

  return (
    <>
    <div className="card-categories" style={{margin: '50px'}} >
  <img src={category.img} className="card-img-categories" alt="..."/>
  <div className="card-body-categories">
    <div className='card-footer-categories'>
      <h5 className="card-title-categories">{category.name}</h5>
    <Link className="card-button-categories" to={`/categories/${category.id}`}>More information</Link>
    {/* <button className="btn btn-danger" onClick={() => dispatch(removeCategory(category.id))} type='button'>Удалить</button> */}
      </div>{/* <p className="card-text-categories">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
{/* <FormAddComment/> */}
</>
  )
}

export default CategoryCard