
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { MovieList } from './pages/page1/components/movies';
// import { SelectedMovie } from './pages/page2/component/selectedMoviePage';
// // import {ParentComponent} from './pages/parentComponet/component/parent';
// import { AddAMovie } from './pages/addMoviePage/component/addMovie';

// function App() {
//   return (
//     <div className="App">

//     {/* <MovieList/>  */}
//       <Router>

//             <Routes>
//               <Route path="/" element={<MovieList/>}/>
//               <Route  path="/selectedMoviePage" element={<SelectedMovie/>}/> 
//               <Route path="/addMovie" element={<AddAMovie/>}/>
    
//             </Routes> 
//       </Router>
     
  

//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;

import './styles/App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieList } from './components/movies';
import { SelectedMovie } from './pages/page2/component/selectedMoviePage';
import { AddAMovie } from './components/addMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/selectedMoviePage" element={<SelectedMovie />} />
          <Route path="/addMovie" element={<AddAMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

