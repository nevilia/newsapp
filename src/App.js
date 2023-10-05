import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
// import News apiKey={apiKey}, {dataLoader} from './components/News apiKey={apiKey}';
import News from './components/News';

// import { Router, Routes, Route} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
  // loader,
  // useLoaderData
} from "react-router-dom";

const App = () => {
  
  const apiKey = process.env.REACT_APP_NEWS_API
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar/>,

        children: [
          {
            path: "/",
            element: <News apiKey={apiKey}  category='General'/>,
            // loader: useLoaderData
          },
          {
            path: "General",
            element: <News apiKey={apiKey}  category='General'/>,
          },
          {
            path: "Science",
            element: <News apiKey={apiKey}  category='Science'/>,
          },
          {
            path: "Business",
            element: <News apiKey={apiKey}  category='Business'/>,
          },
          {
            path: "Entertainment",
            element: <News apiKey={apiKey}  category='Entertainment'/>,
          },
          {
            path: "Health",
            element: <News apiKey={apiKey}  category='Health'/>,
          },
          {
            path: "Sports",
            element: <News apiKey={apiKey}  category='Sports'/>,
          },
          {
            path: "Technology",
            element: <News apiKey={apiKey}  category='Technology'/>,
          },
        ]
      }      
    ]
    );
    
  return(
    <div> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={< News apiKey={apiKey} key='general' pageSize={8} country="in" category="general" />}></Route>
//             <Route path="/Business" element={<News apiKey={apiKey} key='business' pageSize={8} country="in" category="business" />}></Route>
//             <Route path="/Entertainment" element={<News apiKey={apiKey} key='entertainment' pageSize={8} country="in" category="entertainment" />}></Route>
//             <Route path="/General" element={<News apiKey={apiKey} key='general' pageSize={8} country="in" category="general" />}></Route>
//             <Route path="/Health" element={<News apiKey={apiKey} key='health' pageSize={8} country="in" category="health" />}></Route>
//             <Route path="/Science" element={<News apiKey={apiKey} key='science' pageSize={8} country="in" category="science" />}></Route>
//             <Route path="/Sports" element={<News apiKey={apiKey} key='sports' pageSize={8} country="in" category="sports" />}></Route>
//             <Route path="/Technology" element={<News apiKey={apiKey} key='technology}>' pageSize={8} country="in" category="technology" />}></Route>

//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }