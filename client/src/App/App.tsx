import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/NavBar';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { useAppDispatch } from '../redux/store';
import { checkUser } from '../features/auth/authSlice';
import { User } from '../features/auth/types';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadUsers = async (): Promise<void> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as { users: User[] };
    // dispatch({ type: 'heroes/load', payload: data.heroes });
    dispatch({ type: 'users/load', payload: data.users });
  };

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    loadUsers().catch(console.log);
    // setTimeout(() => dispatch(stopLoading()), 1000);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/sign-in" element={<AuthorizationPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route
            path="*"
            element={
              <h1>
                <img
                  src="https://techblog.sdstudio.top/wp-content/uploads/2020/12/928f7cc37d44fb45b1a84e713d66709f-1.png"
                  // src="https://www.bbitrix.ru/upload/medialibrary/1d4/1d4bc838a0107b1b52418ce53e6715e8.png"
                  alt="img"
                  className="error"
                />
              </h1>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
