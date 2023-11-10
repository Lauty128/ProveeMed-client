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
import Backups from './pages/Backups';
import Manual from './pages/Manual';
import ErrorPage from './pages/ErrorPage';
import DevelopmentPage from './pages/DevelopmentPage';

function App() {

  return (
    <>
    {/* LIST OF ROUTES */}
    <BrowserRouter>
      {/* MENU IS EXECUTED IN THE ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/equipos' element={<Equipments/>}/>
          <Route path='/equipos/:id' element={<Equipment />} />
          <Route path='/proveedores' element={<Providers />}/>
          <Route path='/proveedores/:id' element={<Provider />}/>
          <Route path='/backups' element={<Backups />} />
          <Route path='/backups/subir' element={<DevelopmentPage />} />
          <Route path='/manual' element={<Manual />} />
        </Route>
        
        <Route path='/*' element={<ErrorPage />}/>
        
        {/* THIS ELEMENT IS RENDERED IN CASE OF THAT THE ROUTE WILL NOT EXIST */}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
