import './Testytime.css'
import Layout from './TestyTime/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Loadspinner from './TestyTime/Loadspinner';


function App() {

  const Home = lazy(()=>import("./TestyTime/Home"))
  const Menu = lazy(()=> import('./TestyTime/Menu'))
  const Booktable = lazy(()=> import('./TestyTime/Booktable'))
  const Login =lazy(()=>import("./TestyTime/Login"))
  const Table = lazy(()=> import("./TestyTime/Table"))
  const TableDetails=lazy(()=> import("./TestyTime/TableDetails"))
  const Cart = lazy(()=>import("./TestyTime/Cart"))
  return (
  
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' index  element={<Suspense fallback={<Loadspinner/>} >
             <Home/></Suspense>} />        {/* / */}
          <Route path='menu'  element={<Suspense fallback={<Loadspinner/>} >
             <Menu/></Suspense>} />
             <Route path='booktable'  element={<Suspense fallback={<Loadspinner/>} >
             <Booktable/></Suspense> } />
             <Route path='login'  element={<Suspense fallback={<Loadspinner/>} >
             <Login/></Suspense>} />
             <Route path='table'  element={<Suspense fallback={<Loadspinner/>} >
             <Table/></Suspense>} />
             
             <Route path="/table/:id"  element={<Suspense fallback={<Loadspinner/>} >
             <TableDetails/></Suspense>} />
             <Route path="cart"   element={<Suspense fallback={<Loadspinner/>} >
             <Cart/></Suspense>} />
        </Route>
          
      </Routes>
    </BrowserRouter>
    
  )
}

export default App