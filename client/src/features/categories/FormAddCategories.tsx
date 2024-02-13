import React, {useState} from 'react'
import './styles/styles.css'
import { useAppDispatch } from '../../redux/store';
import { addCategory } from './categoriesSlice';

const FormAddCategories = ():JSX.Element => {
    const [name, setName] = useState('');
    const [img, setImg] = useState<File | null>(null)
    const dispatch = useAppDispatch();

    const addHandleCategory = (e: React.FormEvent): void => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        if (img) {
          formData.append('file', img)
        }
        dispatch(addCategory(formData) ).catch(console.log)
    }

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files && e.target.files.length > 0) {
        setImg(e.target.files[0]);
      }
    };
  
  return (
    <form className="form-add-categories" onSubmit={addHandleCategory}>
  <input className="form-input-categories" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Введите название"/>
  <input className="form-input-categories" onChange={handleImgChange} type="file" placeholder="Добавьте изображение"/>
  <button className="form-btn-categories" type="submit">Добавить</button>
</form>
  )
}

export default FormAddCategories