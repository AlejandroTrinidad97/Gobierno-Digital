import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout'
import Pokedex from './pages/Pokedex';

function App() {

  return (

 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Pokedex />} />
          </Route>
        </Routes>
 </BrowserRouter>

  )
}

export default App
