import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Index from './component/body/Index.jsx'
import Course from './component/body/Course.jsx'
import DashBoard from './component/body/DashBoard.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Index/>}/>
      <Route path='/course/:id' element={<Course/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
