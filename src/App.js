import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import Home from './pages/home';
import Voting from './pages/voting';
function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Voting/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;