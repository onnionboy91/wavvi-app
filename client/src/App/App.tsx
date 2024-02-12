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

import './App.css';

import { loadComments } from '../features/comments/commentsSlice';
import CategoryVideos from '../features/videos/CategoryVideos';
import FavouritesPage from '../features/favourites/FavouritesPage';
import { loadLikes } from '../features/favourites/likesSlice';
import ProfilePage from '../features/profile/ProfilePage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    dispatch(loadInstructors()).catch(console.log);
    dispatch(loadComments()).catch(console.log);
    dispatch(loadCategories()).catch(console.log);
    dispatch(loadLikes()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<CategoryVideos />} />
          <Route path="/sign-in" element={<AuthorizationPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route
            path="*"
            element={
              <div className="container-four">
                <img
                  src="https://w-dog.ru/wallpapers/13/13/398770840645436/ne-najden-oshibka-404-ferror-fon.jpg"
                  alt="img"
                  className="error-image"
                  // style={{ position: 'relative', width: '100%', height: '100%' }}
                />
                <button
                  type="button"
                  className="button"
                  onClick={() => (window.location.href = '/categories')}
                >
                  ВЕРНУТЬСЯ НА ГЛАВНУЮ
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
