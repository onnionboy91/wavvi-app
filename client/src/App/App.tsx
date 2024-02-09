import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/navbar/NavBar';
import InstructorsPage from '../features/instructors/InstructorsPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/instructors" element={<InstructorsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
