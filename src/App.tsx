//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//---- Assets
import './styles/index.scss' 

//---- Components
import Layout from './Layout';
import Home from './pages/Home';
import Providers from './pages/Providers';
import Provider from './pages/Provider';
import Equipments from './pages/Equipments';
import Equipment from './pages/Equipment';


function App() {

  return (
    <>
    {/* LIST OF ROUTES */}
    <BrowserRouter basename='/dashboard'>
      {/* MENU IS EXECUTED IN THE ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/equipos' element={<Equipments/>}/>
          <Route path='/equipos/:id' element={<Equipment />} />
          <Route path='/proveedores' element={<Providers />}/>
          <Route path='/proveedores/:id' element={<Provider />}/>
        </Route>
        
        {/* THIS ELEMENT IS RENDERED IN CASE OF THAT THE ROUTE WILL NOT EXIST */}
        <Route path='/*' element={<h1>Esta ruta no existe</h1>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
