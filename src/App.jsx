import React from 'react'
import Projects from './components/Projects'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

const App = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },
                {
                    path:"projects",
                    element:<Projects/>,
                }
            ]
        }
    ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
