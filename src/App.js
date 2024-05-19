// App.js
import React from 'react';
import {app} from './firebase';  // Ensure the path is correct
// import Signin from './Componenet/Signin/Signin';
import Signup from './Componenet/Signup/Signup'

const App = () => {
    return (
        <div>
            <h1>My Firebase App</h1>
            {/* <Signin/> */}
            <Signup/>
            {/* Your components go here */}
        </div>
    );
};

export default App;






//for input data on data base
// import React from 'react';
// import { getDatabase } from "firebase/database";
// import { ref, set } from "firebase/database";
// import { app } from "./firebase";
// import './App.css';
// const db = getDatabase(app);
// function App() {
//   const putData = () =>{
//     set(ref(db,"users/govinda"),{
//       id: 1,
//       name: "Govinda Mahanti",
//       age: 20,

//     });
//   };
//   return (
//     <>
//       <button onClick={putData}>Put Data</button>   
//     </>
//   );
// }

// export default App;
