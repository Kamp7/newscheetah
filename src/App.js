import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

document.body.style.backgroundColor="#e3f2fd";

const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/>
      <News key="general" pageSize={15} category='general'/>
      </>,
  },
  {
    path: "/business",
    element: <><Navbar/>
    <News key="business" pageSize={15} category='business'/>
    </> ,
  },
  {
    path: "/sports",
    element:  <><Navbar/>
    <News key="sports" pageSize={15} category='sports'/>
    </>,
  },
  {
    path: "/science",
    element:  <><Navbar/>
    <News key="science" pageSize={15} category='science'/>
    </>,
  },
  {
    path: "/technology",
    element:  <><Navbar/>
    <News key="technology" pageSize={15} category='technology'/>
    </>,
  },

]);


export class App extends Component {
  
  render() {
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
 )
}
};

export default App;


