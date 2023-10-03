import './App.css';

import React, {Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// Your API key is: 858e8d71b3044c8baaf037b0bb9848cc

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component{
  render(){
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar/>,
        // loader: <News/>,
        children: [
          {
            path: "/",
            element: <News  category='General'/>,
          },
          {
            path: "General",
            element: <News  category='General'/>,
          },
          {
            path: "science",
            element: <News  category='science'/>,
          },
          {
            path: "Business",
            element: <News  category='Business'/>,
          },
          {
            path: "Entertainment",
            element: <News  category='Entertainment'/>,
          },
          {
            path: "Health",
            element: <News  category='Health'/>,
          },
          {
            path: "Sports",
            element: <News  category='Sports'/>,
          },
          {
            path: "Technology",
            element: <News  category='Technology'/>,
          },
        ]
      }      
    ]
    );
  return(
    <div>      
      <RouterProvider router={router}/>
    </div>
  )}
}
