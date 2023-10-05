import './App.css';

import React, {Component} from 'react';
import Navbar from './components/Navbar';
// import News apiKey={this.apiKey}, {dataLoader} from './components/News apiKey={this.apiKey}';
import News from './components/News';
// Your API key is: 858e8d71b3044c8baaf037b0bb9848cc

// import { Router, Routes, Route} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
  // loader,
  // useLoaderData
} from "react-router-dom";

export default class App extends Component{
  
  apiKey = process.env.REACT_APP_NEWS_API
  render(){
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar/>,

        children: [
          {
            path: "/",
            element: <News apiKey={this.apiKey}  category='General'/>,
            // loader: useLoaderData
          },
          {
            path: "General",
            element: <News apiKey={this.apiKey}  category='General'/>,
          },
          {
            path: "Science",
            element: <News apiKey={this.apiKey}  category='Science'/>,
          },
          {
            path: "Business",
            element: <News apiKey={this.apiKey}  category='Business'/>,
          },
          {
            path: "Entertainment",
            element: <News apiKey={this.apiKey}  category='Entertainment'/>,
          },
          {
            path: "Health",
            element: <News apiKey={this.apiKey}  category='Health'/>,
          },
          {
            path: "Sports",
            element: <News apiKey={this.apiKey}  category='Sports'/>,
          },
          {
            path: "Technology",
            element: <News apiKey={this.apiKey}  category='Technology'/>,
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
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={< News apiKey={this.apiKey} key='general' pageSize={8} country="in" category="general" />}></Route>
//             <Route path="/Business" element={<News apiKey={this.apiKey} key='business' pageSize={8} country="in" category="business" />}></Route>
//             <Route path="/Entertainment" element={<News apiKey={this.apiKey} key='entertainment' pageSize={8} country="in" category="entertainment" />}></Route>
//             <Route path="/General" element={<News apiKey={this.apiKey} key='general' pageSize={8} country="in" category="general" />}></Route>
//             <Route path="/Health" element={<News apiKey={this.apiKey} key='health' pageSize={8} country="in" category="health" />}></Route>
//             <Route path="/Science" element={<News apiKey={this.apiKey} key='science' pageSize={8} country="in" category="science" />}></Route>
//             <Route path="/Sports" element={<News apiKey={this.apiKey} key='sports' pageSize={8} country="in" category="sports" />}></Route>
//             <Route path="/Technology" element={<News apiKey={this.apiKey} key='technology}>' pageSize={8} country="in" category="technology" />}></Route>

//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }