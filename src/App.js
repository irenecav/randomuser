import React from 'react';
import './App.css';
import UsersProvider from './context/UsersContext';
import Showcase from './components/Showcase/Showcase';


function App() {
  return (
   <UsersProvider>
     <Showcase/>
   </UsersProvider>
  );
}

export default App;
