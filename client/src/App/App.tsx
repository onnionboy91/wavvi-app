import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/NavBar';

function App(): JSX.Element {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
    
        </Route>
      </Routes>
    </div>
  );
}

export default App;
