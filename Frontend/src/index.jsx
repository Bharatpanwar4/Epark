import React from 'react'

import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css'

// import './assets/styles/bootstrap.custom.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route index={true} path='/' element={<HomePage/>}/>
<Route  path='/product/:id' element={<ProductPage/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router}/>
  </React.Fragment>
)
