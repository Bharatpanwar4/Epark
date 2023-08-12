import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store.js'
import {createBrowserRouter ,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css'

// import './assets/styles/bootstrap.custom.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage.jsx';
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';
import ShippingPage from './pages/ShippingPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route index={true} path='/' element={<HomePage/>}/>
<Route  path='/product/:id' element={<ProductPage/>}/>
<Route  path='/cart' element={<CartPage/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/register' element={<RegisterPage/>}/>
<Route path="*" element={<div>not found</div>}></Route>


{/* private */}
<Route path='' element={<PrivateRoute/>}>
<Route path='/shipping' element={<ShippingPage/>}/>
<Route path='/payment' element={<PaymentPage/>}/>


</Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/></Provider>
  </React.StrictMode>
)
