//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//---- Assets
import './styles/index.scss' 

//---- Components
import Menu from './components/statics/Menu';
import Providers from './pages/Providers';
import Provider from './pages/Provider';
import Equipments from './pages/Equipments';
import Equipment from './pages/Equipment';


function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
        <Route path='/' element={<Equipments/>}/>
        <Route path='/equipo/:id' element={<Equipment />} />
        <Route path='/proveedores' element={<Providers />}/>
        <Route path='/proveedores/:id' element={<Provider />}/>
        <Route path='/*' element={<h1>Le erraste papito</h1>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
