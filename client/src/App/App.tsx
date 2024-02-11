import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/NavBar';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { useAppDispatch } from '../redux/store';
import { checkUser } from '../features/auth/authSlice';
import { loadInstructors } from '../features/instructors/instructorsSlice';
import InstructorsPage from '../features/instructors/InstructorsPage';
import { loadCategories } from '../features/categories/categoriesSlice';
import CategoriesPage from '../features/categories/CategoriesPage';
import FavouritesPage from '../features/favourites/FavouritesPage';
import { loadLikes } from '../features/favourites/likesSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    dispatch(loadInstructors()).catch(console.log);
    dispatch(loadCategories()).catch(console.log);
    dispatch(loadLikes()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/sign-in" element={<AuthorizationPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route
            path="*"
            element={
              <div>
                <img
                  src="https://w-dog.ru/wallpapers/13/13/398770840645436/ne-najden-oshibka-404-ferror-fon.jpg"
                  // src="https://www.bbitrix.ru/upload/medialibrary/1d4/1d4bc838a0107b1b52418ce53e6715e8.png"
                  alt="img"
                  className="error"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                />
                <button type="submit" className="">
                  <a href="/categories">НА ГЛАВНУЮ</a>
                </button>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
